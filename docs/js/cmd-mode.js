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

  /* Google Analytics (same gtag shim as overrides/main.html). Events:
       cmd_mode_session  once per browser session: mode + origin (default | stored | url)
       cmd_mode_switch   every toggle click that changes the mode: from, to, source
                         (header | homepage | add_to_account), origin of the mode being
                         left (default | stored | url | switched), switch_count in session
     plus user property cmd_mode so page views can be segmented by mode. */
  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function sessionCounter(key, increment) {
    try {
      var value = parseInt(sessionStorage.getItem(key) || '0', 10);
      if (increment) {
        value += 1;
        sessionStorage.setItem(key, String(value));
      }
      return value;
    } catch (e) {
      return 0;
    }
  }

  function trackSession(mode) {
    gtag('set', 'user_properties', { cmd_mode: mode });
    if (sessionCounter('cmd-mode-tracked', false) > 0) {
      return;
    }
    sessionCounter('cmd-mode-tracked', true);
    gtag('event', 'cmd_mode_session', {
      mode: mode,
      origin: root.getAttribute('data-cmd-mode-origin') || 'default',
      page: location.pathname
    });
  }

  function trackSwitch(from, to, source) {
    gtag('set', 'user_properties', { cmd_mode: to });
    gtag('event', 'cmd_mode_switch', {
      from: from,
      to: to,
      source: source,
      origin: root.getAttribute('data-cmd-mode-origin') || 'default',
      switch_count: sessionCounter('cmd-mode-switches', true),
      page: location.pathname
    });
    root.setAttribute('data-cmd-mode-origin', 'switched');
  }

  function setMode(mode, source) {
    mode = normalize(mode);
    var previous = current();
    if (previous !== mode && source) {
      trackSwitch(previous, mode, source);
    }
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

  var tracked = false;

  function init() {
    ensureHeaderToggle();
    var mode = current();
    paintButtons(mode);
    swapHeadings(mode);
    if (!tracked) {
      tracked = true;
      trackSession(mode);
    }
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-cmd-mode-btn]');
    if (button) {
      setMode(button.getAttribute('data-cmd-mode-btn'), button.closest('.cmd-toggle--header') ? 'header' : 'homepage');
      return;
    }
    var link = event.target.closest('[data-switch-slash]');
    if (link) {
      setMode('slash', 'add_to_account');
    }
  });

  window.cmdMode = { get: current, set: setMode };

  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(init);
  } else {
    init();
  }
})();
