/*
extract string
*/
function testRegex1(){
    const reg = /\W*class\W([a-zA-Z0-9]+)\(object\):$/;
    let s = "    class State(object):";
    let t = reg.exec(s);
    if (t) {
        console.log(t[1]);
    } else {
        console.warn('no match');
    }
}
testRegex1();

/*
replace string
*/
function testRegex2(){
    const reg = /http(s)?:\/\/[a-z0-9\.\-_:]+\/[a-z0-9\-_\/]+/g;
    let s = "qwerasdfhttps://electron-react-boilerplate.js.org/docs/adding-assets/ASDFSDF234sdf";
    let t = reg.exec(s);
    if (t) {
        let n_t = `<a>${t[0]}</a>`;
        console.log(s.replace(reg, n_t));
    } else {
        console.log('no match')
    }
}
testRegex2();