/*
simple async
*/
async function testAsync1(){
    setTimeout(() => {
        console.log("in async func")
    }, 3000);
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

