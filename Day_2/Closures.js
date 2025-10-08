// Closures
// Definition: function that remembers outer scope variables.

// Why useful: private data, function factories.

// Practice:

//     Create makeCounter() that returns functions to increment/decrement a private counter.

//     Test multiple counters and check independence.
function counter(){
    let count = 0;
    function increment(){
        count ++;
        return count
    }

    function decrement(){
        count--
        return count
    }
    return {
        increment: increment,
        decrement: decrement
    }
}

const counting = counter()
console.log(counting.increment()) // 1
console.log(counting.increment()) // 2
console.log(counting.increment()) // 3
console.log(counting.increment()) // 4
console.log(counting.decrement()) // 3
console.log(counting.decrement()) // 2
console.log(counting.decrement()) // 1