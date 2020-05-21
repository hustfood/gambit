/*
simple promise
*/

let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (Math.random() < 0.5) {
            resolve('show inside');
        } else {
            reject('error inside');
        }
    }, 1000);
});

p1.then(function(value) {
    console.log(value);
}).catch(function(err) {
    console.error(err);
})

console.log('show outside');

/*
Promise.race
*/
let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('run quickly');
    }, 800);
});
let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('run slowly');
    }, 1000);
});

Promise.race([p1, p2]).then(function(value) {
    console.log(value);
}, function(err) {
    console.error(err);
})

/*
Promise.all
*/
let p4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('part 1');
    }, 1000);
});
let p5 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('part 2');
    }, 1500);
});
let p6 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('part 3');
    }, 2000);
});

Promise.all([p4, p5, p6]).then(function(values) {
    console.log(values);
})

/*
chain
*/
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}

runAsync1().then(function(data) {
    console.log(data);
    return runAsync2();
}).then(function(data) {
    console.log(data);
    return runAsync3();
}).then(function(data) {
    console.log(data);
    return "just return";
}).then(function(data) {
    console.log(data);
})
console.log("after multi then chain")