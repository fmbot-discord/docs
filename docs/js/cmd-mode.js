/*
  Site-wide text / slash command mode.

  State lives in `data-cmd-mode` on <html> ("text" | "slash", default slash), persisted in
  localStorage under "cmd-mode" and overridable with ?mode=slash|text in the URL
  (the bot's help command links here with the mode it was opened in).

  Markdown conventions this script and style.css rely on:
    ### .whoknows (`.wk`) { data-slash="/wk" }   heading swaps to "/wk" in slash mode
    ### .jumble { .text-only }                    badge "text command only" in slash mode
    ### /localization { .slash-only }             badge "slash command only" in text mode
    !!! note cmd-text "Examples"                  block only shown in text mode
    !!! note cmd-slash "Examples"                 block only shown in slash mode
    `.update full`{ .cmd-text }                   inline variants
    { .cmd-text } / { .cmd-slash } on its own line after a list item or paragraph
*/
(function () {
  var KEY = 'cmd-mode';
  var root = document.documentElement;

  function normalize(mode) {
    return mode === 'text' ? 'text' : 'slash';
  }

  function current() {
    return normalize(root.getAttribute('data-cmd-mode'));
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function slashHtml(value) {
    return value.split('·').map(function (part) {
      return '<span class="cmd-slash-name">' + escapeHtml(part.trim()) + '</span>';
    }).join(' ');
  }

  function swapHeadings(mode) {
    document.querySelectorAll('[data-slash]').forEach(function (heading) {
      var headerlink = heading.querySelector('.headerlink');
      if (!heading.hasAttribute('data-text-html')) {
        var clone = heading.cloneNode(true);
        var cloneLink = clone.querySelector('.headerlink');
        if (cloneLink) {
          cloneLink.remove();
        }
        heading.setAttribute('data-text-html', clone.innerHTML);
      }

      var marker = (heading.getAttribute('data-text-html').match(/[⭐✨]/) || [''])[0];
      var html = mode === 'slash'
        ? slashHtml(heading.getAttribute('data-slash')) + (marker ? ' ' + marker : '')
        : heading.getAttribute('data-text-html');

      heading.innerHTML = html;
      if (headerlink) {
        heading.appendChild(headerlink);
      }

      if (heading.id) {
        document.querySelectorAll('a.md-nav__link[href$="#' + heading.id + '"] .md-typeset').forEach(function (label) {
          if (!label.hasAttribute('data-text-html')) {
            label.setAttribute('data-text-html', label.innerHTML);
          }
          label.innerHTML = mode === 'slash'
            ? escapeHtml(heading.getAttribute('data-slash')) + (marker ? ' ' + marker : '')
            : label.getAttribute('data-text-html');
        });
      }
    });
  }

  function paintButtons(mode) {
    document.querySelectorAll('[data-cmd-mode-btn]').forEach(function (button) {
      var active = button.getAttribute('data-cmd-mode-btn') === mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setMode(mode) {
    mode = normalize(mode);
    root.setAttribute('data-cmd-mode', mode);
    try {
      localStorage.setItem(KEY, mode);
    } catch (e) { /* storage unavailable */ }
    paintButtons(mode);
    swapHeadings(mode);
    document.dispatchEvent(new CustomEvent('cmdmodechange', { detail: { mode: mode } }));
  }

  function toggleMarkup() {
    return '<div class="cmd-toggle" role="group" aria-label="Command style">' +
      '<button type="button" class="cmd-toggle__btn" data-cmd-mode-btn="text" title="Show text commands (.fm)">' +
      '<code>.</code><span class="cmd-toggle__label">Text</span></button>' +
      '<button type="button" class="cmd-toggle__btn" data-cmd-mode-btn="slash" title="Show slash commands (/fm)">' +
      '<code>/</code><span class="cmd-toggle__label">Slash</span></button>' +
      '</div>';
  }

  function ensureHeaderToggle() {
    var header = document.querySelector('.md-header__inner');
    if (!header || header.querySelector('.cmd-toggle--header')) {
      return;
    }
    var wrapper = document.createElement('div');
    wrapper.className = 'md-header__option cmd-toggle--header';
    wrapper.innerHTML = toggleMarkup();
    var palette = header.querySelector('[data-md-component="palette"]');
    header.insertBefore(wrapper, palette || header.querySelector('.md-header__source'));
  }

  function init() {
    ensureHeaderToggle();
    var mode = current();
    paintButtons(mode);
    swapHeadings(mode);
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-cmd-mode-btn]');
    if (button) {
      setMode(button.getAttribute('data-cmd-mode-btn'));
      return;
    }
    var link = event.target.closest('[data-switch-slash]');
    if (link) {
      setMode('slash');
    }
  });

  window.cmdMode = { get: current, set: setMode };

  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(init);
  } else {
    init();
  }
})();
