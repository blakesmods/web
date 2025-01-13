# Blake's Mods Website

This repository contains the source code of [blakesmods.com](https://blakesmods.com).

## Contributing

If you would like to contribute content to the Documentation or Wiki, you can do so by editing the files in the `apps/web/content` directory. 

While you can do simple edits using the GitHub UI, it's recommended to set up a development environment so that you can preview how the content will look on the website itself while writing it. (see [Development](#development))

Notes relating to writing content:
- assets (such as images) are placed in the `apps/web/public/assets` directory and can be linked to in your markdown by using the `/assets/<asset path>` url
- components placed in the `apps/web/components/global` directory are usable in your markdown

## Development

To get a local development environment set up, you can do the following:

1. run `pnpm install` to install all required dependencies
2. run `docker compose up` to start the local database
3. run `pnpm --filter db seed` to seed the database with test data
4. run `pnpm dev` to start the dev servers

If you just want to test docs/wiki content changes you can skip steps 2 and 3 and instead run `pnpm --filter web dev` to launch just the website.

## License

[MIT License](./LICENSE)
