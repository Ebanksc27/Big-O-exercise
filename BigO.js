// Step One
// Simplify the the following big O expressions as much as possible:
1. O(n + 10)

Simplified: O(n)
// Reason: The constant 10 is insignificant compared to n for large values of n.

2. O(100 * n)

Simplified: O(n)
// Reason: The constant 100 doesn't affect the growth rate of n.

3. O(25)

Simplified: O(1)
// Reason: A constant expression indicates a constant time complexity, regardless of the input size.

4. O(n^2 + n^3)

Simplified: O(n^3)
// Reason: n^3 grows faster than n^2, so it is the dominating term.

5. O(n + n + n + n)

Simplified: O(n)
// Reason: Adding n four times is still linear growth.

6. O(1000 * log(n) + n)

Simplified: O(n)
// Reason: n grows faster than log(n), making it the dominating term.

7. O(1000 * n * log(n) + n)

Simplified: O(n log(n))
// Reason: n log(n) grows faster than n alone, and the constant 1000 is ignored.

8. O(2^n + n^2)

Simplified: O(2^n)
// Reason: Exponential growth (2^n) is much faster than polynomial growth (n^2).

9. O(5 + 3 + 1)

Simplified: O(1)
// Reason: The expression is constant, so it simplifies to constant time complexity.

10. O(n + n^(1/2) + n^2 + n * log(n)^10)

Simplified: O(n^2)
// Reason: n^2 is the fastest-growing term among all the given terms.

// when simplifying Big-O expressions, 
// we look for the term with the highest growth rate as n becomes very large and ignore constants and lower order terms.