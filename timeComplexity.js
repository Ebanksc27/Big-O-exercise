function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  // Time Complexity: O(n)
  // Reason: Reason: The loop runs from 1 to n. The time it takes grows linearly with the value of n. 
  // Each iteration performs a constant time operation (console.log).
  
  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
  // Time Complexity: O(n)
  // Reason: The loop runs for the maximum of n and 10. For n < 10, it runs 10 times (which is constant time, O(1)), 
  // but for n >= 10, it runs n times, which makes it O(n). Since Big-O notation describes the upper limit, the time complexity is O(n).
  
  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
 // Time Complexity: O(1)
 // Reason: The loop runs for the minimum of n and 10. It will never run more than 10 times regardless of n, making it a constant time operation.
  
  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  // Time Complexity: O(n)
  // Reason: The loop iterates over the entire length of the array (array.length). 
  // Regardless of the if condition inside the loop, every element is checked once, 
  // leading to a linear time complexity relative to the array size.
  
  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
  // Time Complexity: O(n^2)
  // Reason: here are two nested loops. The outer loop runs n times (array.length), and for each iteration of the outer loop, 
  // the inner loop runs up to i times, which sums up to 1 + 2 + 3 + ... + n. 
  // This sum is n(n+1)22n(n+1)​, which is O(n^2) in terms of time complexity.
  
  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
  // Time Complexity: O(n)
  // Reason: The loop iterates through each character of the string once, where n is the length of the string. 
  // The includes method on the string 'vowels' is also O(n) in the worst case, 
  // but since the 'vowels' string is of constant length, it simplifies to O(1). Thus, the overall time complexity is O(n).


  // Focus on how the number of operations grows with the size of the input (n or array length). 
  // The key is identifying loops (single or nested) and understanding how many times they iterate relative to the input size.