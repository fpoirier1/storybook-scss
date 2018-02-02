# C24 Dashboard

## Dev server

Install node modules

```shell
$ npm install
```

Start the server

```shell
$ npm start
# or for Webpack Dashboard
$ npm run dev
```

Open your browser to `http://localhost:8111`. You can change the hostname and port within the `webpack.config.js` file.

[dotenv-safe](https://www.npmjs.com/package/dotenv-safe) is used for the `.env` variables, therefore all `.env` vars must be declared in the `.env.example` file for them to be usable in the app.

You are provided with two `.env` files, a `.env` which is used for your local development app (webpack dev server) and a `.env.production` which will be used when building your production ready assets via `npm run build` (see [below](#production-build)).

By default `.env.production` is in `.gitignore`, if this doesn't contain any sensitive information, you may want to commit it.
`

## Production build

To build production ready assets, simply run:

```shell
$ npm run build
```

This will build a uglified `app-[hash].js` and a minified `app-[hash].css` and automatically create a `index.html` linking these files for you in a `build/` directory.

The `build/` directory is `.gitignore`'d by default, and purged before every build.

```

## Available commands

- `npm start` - start the dev server
- `npm run clean` - delete the `build` folder
- `npm run lint` - run a eslint check
- `npm test` - run all tests
- `npm run dev` - start the dev server using webpack dashboard
- `npm run build` - create a production ready build in the `build` folder

