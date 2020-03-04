function PrintArray(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + " "
    }
    console.log(s);
}

function GetPivot(arr) {
    
}


function SearchIndex(arr, k) {
    let pivot = GetPivot(arr);
}


let arr = [6, 7, 8, 1, 2, 3, 4, 5];
PrintArray(arr);
console.log(SearchIndex(arr, 2));
