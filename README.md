
Install babel to transpile es6 JavaScript.

```bash
$ yarn add -D babel-cli babel-preset-env
```

Install babel-runtime pollfill.
```bash
$ yarn add babel-runtime

# http://babeljs.io/docs/plugins/transform-runtime/
$ yarn add -D babel-plugin-transform-runtime
```

.babelrc
In VS Code, we can add [Babelrc](https://marketplace.visualstudio.com/items?itemName=waderyan.babelrc "Babelrc") plugin for easily editing `.babelrc`.

```
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

Add eslint.
```bash
$ npm install -g eslint
$ eslint --init
```

Add `.editconfig` and modify `.eslintrc.json`.

### References

* https://www.zfanw.com/blog/babel-6.html#babel
* https://youtu.be/rsaqfyDLzQM
* http://babeljs.io/docs/plugins/preset-env/
* http://babeljs.io/docs/plugins/preset-es2015/
