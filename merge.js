// array1 and array2 will hold the left and right arrays from the mergeSort function
const merge = (array1, array2) => {
    // i and j represent index positions to be used during comparsion
    let i = 0;
    let j = 0;
    // result holds the sorted array
    let result = [];
    /** while i is less than array1.length and j is less than array2.length
     */
    while (i < array1.length && j < array2.length) {
        /** if array of index i is less than array2 of index j push the
         *  array1[i] into the result and then increment i
         */
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
            // else push the array2[j] into result and increment j
        } else {
            result.push(array2[j]);
            j++;
        }
    }
    /** These two while loops are to ensure that when one array is 
     *  exhausted push the remainder values from the other array
     *  for example: 
     *  [1,3,5] [2,4,6,7,8,9]
     *  once the mergesort reaches this [1,2,3,4,5]
     *  these while loops will ensure that the 7,8,9 or other leftovers are push in
     *  No matter if its in array1 or array2
     */ 
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    // return the sorted array
    return result;
}

// This is used to split the array into pairs recursively
const mergeSort = (array) => {
    // if the array length is equal to zero or 1 it cannot be split so return it
    if (array.length <= 1) return array;
    // divide the array into two parts
    let mid = Math.floor(array.length / 2);
    // use slice to get the left side of array
    let left = mergeSort(array.slice(0, mid));
    // use slice to get the right side of array
    let right = mergeSort(array.slice(mid));
    // call merge to sort 
    return merge(left, right);
}

module.exports = { merge, mergeSort};