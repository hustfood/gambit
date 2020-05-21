/*
simple async
*/
async function testAsync1(){
    setTimeout(() => {
        console.log("in async func")
    }, 2000);
    return "done in async func"
}
let a1 = testAsync1();
a1.then(value => {
    console.log(value);
}).catch(err => {
    console.error(err);
});
console.log("out async func");

/*
with await (not promise)
*/
async function testAsync2(){
    let a1 = await "be await";  // no effect if not promise
    console.log(a1);
}
testAsync2();

/*
with await (promise)
*/
function get_p(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.5) {
                resolve('show inside');
            } else {
                reject('error inside');
            }
        }, 2000);
    });
}

async function testAsync3(){
    console.log("before await");
    let a = await get_p();
    console.log(a);
    console.log("after await");
}
testAsync3().then(value => {
    console.log(value);
}).catch(err => {
    console.log(err)
});
console.log("after async func");

/*
await with chain
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

async function testAsync4(){
    const p1 = await runAsync1();
    const p2 = await runAsync2();
    const p3 = await runAsync3();
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
testAsync4();
console.log("after await chain")