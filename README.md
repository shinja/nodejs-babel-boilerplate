
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
  "preset": {
    "es2015"
  },
  "plugins": [
    "transform-runtime"
  ]
}
```


### References

* https://www.zfanw.com/blog/babel-6.html#babel
* https://youtu.be/rsaqfyDLzQM
* http://babeljs.io/docs/plugins/preset-env/
* http://babeljs.io/docs/plugins/preset-es2015/
