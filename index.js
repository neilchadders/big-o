//  BIG O - Two functions the same
// But which is best??


function addUpToN(n){
    let total = 0
    for (let i = 1; i<=n; i++){
        total +=i;
    }
    return total;
}

console.log(addUpToN(5))

function addUpToNsecond(n){
    return n * (n + 1) /2
}

console.log(addUpToNsecond(5))




//  TIME
//  Measure speed using performance.now()
var t1 = performance.now()
addUpToN(1000000000)
var t2 = performance.now()
console.log(`Time elapsed is ${t2-t1 / 1000} seconds`)

var t3 = performance.now()
addUpToNsecond(1000000000)
var t4 = performance.now()
console.log(`Time elapsed is ${t3-t4 / 1000} seconds`)




//Counting Operations
// Can be really tricky - see below
function addUpToN(n){
    let total = 0
    for (let i = 1; i<=n; i++){
        total +=i;
    }
    return total;
}

//BUT- the one below only has 3 operations
function addUpToNsecond(n){
    return n * (n + 1) /2
}