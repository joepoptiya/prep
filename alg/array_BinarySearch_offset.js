function PrintArray(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + " "
    }
    console.log(s);
}

function GetPivot(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.trunc(left + (right - left) / 2);

        if (arr[mid] > arr[right])
            left = mid+1;
        else 
            right = mid;
    }

    return left;
}


function SearchIndex(arr, k) {
    let pivot = GetPivot(arr);
    return pivot;
}


let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
PrintArray(arr);
console.log(SearchIndex(arr, 2));

/*
let arr1 = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
PrintArray(arr);
console.log(SearchIndex(arr, 2));
*/