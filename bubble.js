const bubbleSort = (array) => {
    // incrementing the array index and starting at index 0
    for (let i = 0; i < array.length; i++) {
        /** initailizing the swapped variable to be false if the swap does 
         *  not occur which would indicate that the sorting is finished
         */
        let swapped = false;
        // using another loop to ensure that each element of the array is sorted
        for (let j = 0; j < array.length - i; j++) {
            // if the element is greater than the element on the right then swap
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        // if swapped is false break/stop the loop
        if (!swapped) break;
    }
    // return the sorted array
    return array;
}

module.exports = bubbleSort;