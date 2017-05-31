/* 
Old Content below(Plain Text):

Given an unsorted int array, treat each element as the price of an egg for a particular time. Your objective is to maximize the profit for one business transaction by finding out the best time to buy an egg and the best time to sell the egg. You must purchase the egg first then be able to sell it (i.e. the index of purchase must by lesser than the index of sale)

        
Input :  [4, 14, 12, 8 , 9 , 17, 1]
//O(n^2)
o(n)
Output : 13
 */
//email: ashraf@buzzhero.io
console.log(someName());

function someName() {
 var array = [4, 14, 12, 8 , 9 , 17, 1];
    
 var largestDifference = 0;
    //O(n^2)
    for ( var index = 0; index < array.length-1; index++ ) {
      for ( var y = 1; y < array.length; y++) {
        if ( array[y] - array[index] > largestDifference ) {
        largestDifference = array[y] - array[index]
        }
      }
    }
    return largestDifference
}



function eggTrading(arr) {
    var best = 0, smallest = Infinity, largest = -Infinity
    //O(n)
    for ( var i = 0; i < arr.length; i++ ) {
        var cur = arr[i]
        if ( cur > largest ) {
            largest = cur
            best = largest - smallest > best ? largest - smallest : best
        }
        if ( cur < smallest ) smallest = cur      
    }
    
    return best
}

console.log(eggTrading([4, 14, 12, 8 , 9 , 17, 1]))