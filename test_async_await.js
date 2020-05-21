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
with await
*/
async function testAsync2(){
    let a = await "be await";  // no effect if not promise
    console.log(a);
}
testAsync2();

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
}).catch(erro => {
    console.log(err)
});
console.log("after async func");
