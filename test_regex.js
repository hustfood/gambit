/*
extract string
*/
function testRegex1(){
    let reg = /\W*class\W([a-zA-Z0-9]+)\(object\):$/;
    let s = "    class State(object):";
    let t = reg.exec(s);
    if (t) {
        console.log(t[1]);
    } else {
        console.warn('no match');
    }
}
testRegex1();