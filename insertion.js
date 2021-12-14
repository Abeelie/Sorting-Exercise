const insertionSort = (array) => {
    // i starts with index 1 because theres nothing at the left of index 0
    for (let i = 1; i < array.length; i++) {
        /** j is set to i to start the index
            j is decrementing to compare all values on the left
            once all values on the left are compared, 
            j is equal to 0 and loop stops until next increment on i
        */
        for (let j = i; j > 0; j--) {
            // if value at index j is less than the value on the left swap the position
            if(array[j] < array[j-1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    // return array when the sorting is done
    return array;
}

module.exports = insertionSort;