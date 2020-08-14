interface Time {
    h: number;
    m: number;
    s: number;
}

function printTime(v: Time) {
    console.log(v.h)
    console.log(v.m)
    console.log(v.s)
}

var t1: Time = { h: 10, m: 20, s: 10};
var t2 = { h: 10, m: 20, s: 20 }
var t3 = { h: 10, m: 20, s: 20, ms : 1000 }

printTime(t1)  
printTime(t2)  // Duck Typing 
printTime(t3)  // Duck Typing 



