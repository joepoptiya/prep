function PrintArray(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + " "
    }
    console.log(s);
}

function GetPivot(arr, left, right) {
    let mid = Math.trunc((right - left) / 2);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + (right - left) / 2;

        if (arr[mid] > arr[right])
            
    }

    /*
    console.log(left, mid, right);
    console.log(arr[left], arr[mid], arr[right]);
    // 6, 7, 8, 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10, 1, 2, 3, 4, 5
    if (arr[left] > arr[mid]) {
        console.log("Move left");
        console.log();
        return GetPivot(arr, left, mid-1);
    }
    else if (arr[mid] > arr[right]) {
        console.log("Move left");
        console.log();
        return GetPivot(arr, mid+1, right);
    }
    else
        return mid;
    */
}


function SearchIndex(arr, k) {
    let pivot = GetPivot(arr, 0, arr.length-1);
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