# www

[![Deploy Hugo site](https://github.com/Anthrocon/www/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Anthrocon/www/actions/workflows/deploy.yaml)

The Anthrocon website.

## Technology Colophon

- [Hugo](https://gohugo.io/) - Static sites in Go!
  - [Markdown](https://commonmark.org/) - Readable pages!
- [Semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML) - Accessibility by default!
- [Pico CSS](https://picocss.com/) - Lightweight CSS framework!
- [Prettier](https://prettier.io) - Opinionated code formatting!
  - [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template) - Proper formatting for Hugo templates!
  - [Volta](https://volta.sh) - Management for Prettier formatting!

## Getting started

### Installing Hugo

Follow the [official Hugo documentation](https://gohugo.io/installation/) for your system.
Be sure to install the `hugo-extended` version, as it comes with extra support that this site requires.

### Building the website

Building this website for public release is one command: `hugo`!
You will see output similar to the following:

```

$ hugo                                                                                                                                                                                   [±add-prettier-to-repo ✓]
Start building sites …
hugo v0.119.0-b84644c008e0dc2c4b67bd69cccf87a41a03937e+extended linux/amd64 BuildDate=2023-09-24T15:20:17Z VendorInfo=gohugoio


                   | EN
-------------------+------
  Pages            |  66
  Paginator pages  |   0
  Non-page files   |  73
  Static files     |   1
  Processed images | 268
  Aliases          |  42
  Sitemaps         |   1
  Cleaned          |   0

Total in 76 ms
```

You can then use the `public` folder to upload the site to whatever static host you desire.

If you'd like hugo to serve you the site locally, just run `hugo serve`!
You'll see output like so:

```
> $ hugo serve                                                                                                                                                                             [±add-prettier-to-repo ●]
Watching for changes in anthrocon/www/{content,layouts,package.json,themes}
Watching for config changes in anthrocon/www/hugo.yaml, anthrocon/www/themes/anthropomorphic/hugo.toml
Start building sites …
hugo v0.119.0-b84644c008e0dc2c4b67bd69cccf87a41a03937e+extended linux/amd64 BuildDate=2023-09-24T15:20:17Z VendorInfo=gohugoio

                   | EN
-------------------+------
  Pages            |  66
  Paginator pages  |   0
  Non-page files   |  73
  Static files     |   1
  Processed images | 268
  Aliases          |  42
  Sitemaps         |   1
  Cleaned          |   0

Built in 107 ms
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

You can now visit [the site locally](http://localhost:1313/).
Press Ctrl + C to stop the server when you're done.

### Installing Volta

[Volta](https://volta.sh/) is a Node.js toolchain manager built in Rust that we mainly use to run Prettier.

```
# install Volta
curl https://get.volta.sh | bash
```

You can learn more about using Volta [here](https://docs.volta.sh/guide/understanding#managing-your-toolchain).
What we're doing, in Volta terms, is pinning a version of Node and the devtools we need under that version.

### Running the linter

Volta, once configured correctly, should automatically load the pinned Node/NPM version we require.

```
volta install node
volta install npm
```

should get you what you need. After that, install the devDependencies for this Node project:

```
npm install
```

If that doesn't work for some reason, you can try installing the packages directly:

```
npm install prettier prettier-plugin-go-template
```

Then, you can run Prettier:

```
prettier "**/*.{md,css,html,js}"
```

or, if you want Prettier to format your files directly:

```
prettier --write "**/*.{md,css,html,js}"
```

## License(s)

### Code

- Licensed under the [MIT License](themes/anthropomorphic/LICENSE).

### Website content

- All rights reserved. © Copyright Anthrocon, Inc., 2023.
