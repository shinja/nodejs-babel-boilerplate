
console.log('hello world')

/**
 * We're using async/await feature of es2017 'async-to-generator'.
 * There will be a compile error if we only use babel-preset-es2015 for babel transpiling.
 * I think the best practice is applying babel-preset-env.
 *
 * Each yearly preset only compiles what was ratified in that year.
 * babel-preset-env replaces es2015, es2016, es2017, latest.
 */

function awaitFunc () {
  return new Promise((resolve) => {
    console.log('wait for 3 secs.')
    setTimeout(() => {
      resolve('time\' up')
    }, 3000)
  })
}

async function asyncFunc () {
  const rs = await awaitFunc()
  console.log('asyncFunc', rs)
}

asyncFunc()

const set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(1)
set.add(1)
set.add(5)

console.log(set)
console.log(Array.from(set))
