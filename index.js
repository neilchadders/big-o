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


///// SPACE COMPLEXITY - amount of space in memory taken

function sumArr(arr){
    let total =0 // 1st variable
    for(let i = 0; i<arr.length;i++){  // i is second variable
        total += arr[i];
    }
    return total;
} //The only 2 variables are total and i so O(2) simplified to O(1) space

function doubleArr(arr){
    let newArr= []// 1st variable
    for(let i = 0; i<arr.length;i++){  // i is second variable
        newArr.push(arr[i]); // however this will return multiple outputs it 
                                // will be directly proportional to arr so if arr.length is 10 newArr.length will
                                // return 10 so O(n)
    }
    return newArr;
}

// Logarithim - Opposite of exponentials

// log^2(8) = 3 = This means what power of 2 would === 8? 2x2x2 so it's 3
//Lof


