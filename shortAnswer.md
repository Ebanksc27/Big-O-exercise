    1. True or False: n^2 + n is O(n^2). 
        True. The term n^2 is the dominating term, and n becomes negligible as n grows larger. So, n^2 + n is effectively O(n^2).

    2. True or False: n^2 * n is O(n^3).
        True. Multiplying n^2 by n gives n^3, so this expression is O(n^3).

    3. True or False: n^2 + n is O(n).
        False. The term n^2 grows much faster than n as n increases, so n^2 + n cannot be simplified to O(n).

    4. What’s the time complexity of the .indexOf array method?
        O(n). .indexOf needs to potentially look through each element in the array once until it finds the target element, making it linear in the size of the array.

    5. What’s the time complexity of the .includes array method?
        O(n). Similar to .indexOf, .includes checks each element until it finds the target, resulting in a linear time complexity.

    6. What’s the time complexity of the .forEach array method?
        O(n). .forEach iterates over each element of the array once, leading to linear time complexity.

    7. What’s the time complexity of the .sort array method?
        O(n log n). Most modern JavaScript engines implement the .sort method with efficient algorithms like Timsort or Quicksort, which have an average time complexity of O(n log n).

    8. What’s the time complexity of the .unshift array method?
        O(n). .unshift adds an element to the beginning of the array, requiring a shift of all other elements in the array, leading to linear time complexity.

    9. What’s the time complexity of the .push array method?
        O(1). .push adds an element to the end of the array, which is a constant time operation in most cases. However, in some situations, if the array needs to resize, it could be more costly, but this is generally amortized as O(1).

    10. What’s the time complexity of the .splice array method?
        O(n). The .splice method can involve removing or adding elements at any position, which may require shifting elements in the array. In the worst case, this can lead to linear time complexity.

    11. What’s the time complexity of the .pop array method?
        O(1). .pop removes an element from the end of the array, which is a constant time operation.

    12. What’s the time complexity of the Object.keys() function?
        O(n). Object.keys() iterates over all the enumerable property names of an object. The time complexity is proportional to the number of keys.

BONUS

    13. What’s the space complexity of the Object.keys() function?
        O(n). The space complexity is linear in relation to the number of keys, as it creates an array containing all those keys.