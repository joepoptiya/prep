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

function Search(arr, low, high, k) {
    if (low > high) return -1;
//    console.log("mid = ", (low + (high - low)) / 2, Math.round((low + (high - low)) / 2));
    let mid = Math.trunc((low + (high - low)) / 2);
//    console.log("mid = ", mid);

    if (k < arr[mid]) {
        return SearchIndex(arr, low, mid-1, k);
    } else if (arr[mid] < k) {
        return SearchIndex(arr, mid+1, high, k);
    } else 
        return mid;
}


function SearchIndex(arr, k) {
    let idx = -1;
    let pivot = GetPivot(arr);

    console.log(arr[0], k, arr[pivot-1]);
    console.log(arr[0] >= k, k <= arr[pivot-1]);
    console.log(arr[pivot], k, arr[arr.length-1]);
    if (arr[0] >= k && k <= arr[pivot-1]) {
        //idx = Search(arr, 0, pivot-1, k);
        console.log("Serach left");
    } else { //if (arr[pivot] >= k && k <= arr[arr.length-1]) 
        //idx = Search(arr, pivot, arr.length-1, k);
        console.log("Search right");
    }
//    console.log(idx, arr[idx]);
    return arr[idx];
}


let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
PrintArray(arr);
console.log(SearchIndex(arr, 2));

/*
let arr1 = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
PrintArray(arr);
console.log(SearchIndex(arr, 2));
*/