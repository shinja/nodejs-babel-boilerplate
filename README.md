
### Packages Applied

Install `babel-cli` to transpile es6.

```bash
$ yarn add -D @babel/core @babel/cli
$ yarn add core-js@2
```

.babel.config.json
In VS Code, we can add [Babelrc](https://marketplace.visualstudio.com/items?itemName=waderyan.babelrc "Babelrc") plugin for easily editing `.babelrc`.

```
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage"
    }]
  ]
}
```

Add eslint.

Install `eslint` and `eslint-config-standard`

```bash
$ npx eslint --init
#choice standard config.
```

Add `.editconfig`.

### References

* https://www.zfanw.com/blog/babel-6.html#babel
* https://youtu.be/rsaqfyDLzQM
* http://babeljs.io/docs/plugins/preset-env/
* http://babeljs.io/docs/plugins/preset-es2015/
