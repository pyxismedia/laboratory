# Templates

Based on [pug](https://pugjs.org/api/getting-started.html), [express](https://expressjs.com) and [sass](https://sass-lang.com).

## Objective

Objective of this package is to provide as much as simplictic environment for making [atomic design](http://bradfrost.com/blog/post/atomic-web-design/). Please spend few minutes to understand what is going on.

## Structure

Whole development should be done in `./src` and nothing else should be modified. Sstructure is as follows.

```
packages/templates/src
├── sass                  - Global sass files
├── views                 - View files written by pug
│   ├── atoms             - Atomic Design Atoms
│   ├── moleculs          - Atomic Design Molecules
│   ├── organism          - Atomic Design Organism
│   ├── pages             - Atomic Design Pages
│   ├── templates         - Atomic Design Templates
│   ├── index.pug         - Application starts here
│   └── layout.pug        - Layout file which should be extended by all templates
├── README.md             - This file
└── routes.js             - Add route if you need other routes
```


