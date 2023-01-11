// function *generator(){
//     yield 1
//     yield 2
// }

// let iterator = generator()

// console.log(iterator.next())
// console.log(iterator.next())
// iterator.next()



function mockTask1(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('task1')
      }, 3000)
  })
}

function mockTask2(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('task2')
      }, 1000)
  })
}

// function* asyncGenerator(task) {
//     console.log('thread on generator execution context')
//     // task is a promise task, will yielded back inmmediately, and suspend the execution context
//     // when will it come back? iterator.next() 
//     const data = yield task()
//     // back to generator execution context
//     console.log('task completed', data)
//     console.log('finished', data)
// }


// console.log('global execution context')
// const iterator = asyncGenerator(mockTask1)
// // fire the async task and return back a Promise, bring execution context back to global
// iterator.next().value.then((resolvedValue)=> {
//     iterator.next(resolvedValue)    
// })

// const iterator2 = asyncGenerator(mockTask2)
// iterator2.next().value.then((resolvedValue)=> {
//     iterator2.next(resolvedValue)    
// })



function* asyncGeneratorSequence(task1, task2) {
  console.log('thread on generator execution context')
  // task is a promise task, will yielded back inmmediately, and suspend the execution context
  // when will it come back? iterator.next() 
  const data = yield task1()
  // back to generator execution context
  console.log('task completed', data)
  console.log('finished', data)

  const data2 = yield task2()
  console.log('task completed', data2)
  console.log('finished', data2)
  
}


console.log('global execution context')
const iteratorNew = asyncGeneratorSequence(mockTask1, mockTask2)
// fire the async task and return back a Promise, bring execution context back to global
iteratorNew.next().value.then((resolvedValue)=> {
  iteratorNew.next(resolvedValue).value.then((resolvedValue2) =>{
      iteratorNew.next(resolvedValue2)        
  })    
  
})