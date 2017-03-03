function addPromise (a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return resolve(a + b)
    } else {
      return reject(new Error('Parameters should be equel to numbers'))
    }
  })
}

addPromise(1, '1').then(function (number) {
  console.log(number)
}, function (err) {
  console.log(err)
})

addPromise(1, 1).then(function (sum) {
  console.log('Success: ', sum)
}, function (err) {
  console.log('Error: ', err)
})
