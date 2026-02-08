# FMbot documentation
Documentation website for fmbot

https://fm.bot/

To edit the documentation:

1. Install `uv`: https://docs.astral.sh/uv/getting-started/installation/

2. Clone the repo

3. Install dependencies using `uv sync --frozen`

4. See a live preview using `uv run zensical serve`


## Updating your local installation

1. Upgrade `uv`: https://docs.astral.sh/uv/getting-started/installation/#upgrading-uv

2. Upgrade dependencies: `uv lock --upgrade --exclude-newer P7D`
    - Note: Setting an age requirement such as `--exclude-newer P7D` helps avoid potential supply chain attacks by waiting at least a week before applying an available version.
    - Note: Dependencies will not be upgraded any other way currently, so run this command every now and then.
