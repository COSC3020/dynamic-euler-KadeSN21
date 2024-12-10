# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm? 
The worst-case $\Theta$ of this algorithm is $\Theta(n)$, the while loop in "factorial" itterates from 2 to $n$, for a total of $n-1$ itterations, and the for loop in "e" itterates over the "fact" array which has a size of $n + 1$, so we have $\Theta(2n)$, dropping the constant, we are left with a final worst-case $\Theta$ complexity of $\Theta(n)$.

Help: I looked at LukeHoese's repo to get a better idea of what our tests should look like, I also looked here: https://stackoverflow.com/questions/6164629/what-is-the-difference-between-bottom-up-and-top-down to see some examples of bottom up approaches. ChatGPT helped format the tests to work with the array that is outputted from my factorial function.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”