function PrintArray(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + " "
    }
    console.log(s);
}

function getGCD(a,b) {
    if (b == 0) return a;
    return getGCD(b, a % b);
}

function leftRotateArray(arr, n) {
    let l = arr.length-1;
    let gcd = getGCD(arr.length, n);
    let sets = arr.length / gcd;
//    console.log("GCD = " + gcd, "Sets = " + sets);

    let i = 0;
    let offSet = 0;
    while (i<gcd) {
//        let s = "";
//        let p = "";
        let t = arr[i];
        let pidx = 0;
        let idx = 0;
        for (let x = 1; x < sets; x++) {
            pidx = i + (gcd * (x - 1)); 
            idx = i + (gcd * x);
//            s += arr[idx];
//            p += arr[pidx];
            arr[pidx] = arr[idx];
        }
        arr[idx] = t;
//        console.log(p);
//        console.log(s);
        i++;        
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //,8,9,10,11];
PrintArray(arr);
leftRotateArray(arr, 3);
PrintArray(arr);
console.log();
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
PrintArray(arr);
leftRotateArray(arr, 4);
PrintArray(arr);
