## Algorithm Exercises: Fibonacci Sequence

In this exercise, you will again consider implementing a similar process in two different ways: iteratively and recursively. You familiarized yourself with each of these approaches in the [previous exercise](../../../algorithm-drill-factorial-challenge).

The work you will be doing while trying to solve this problem is calculating a number in the Fibonacci sequence. You will need to write two methods, each of which will take an integer as an argument and return its index in the Fibonacci sequence. If your methods are called with an argument of `7`, then they return the seventh number in the sequence. If called with `23`, then, accordingly, they return the twenty-third number in the sequence.


### Fibonacci sequence

[Fibonacci sequence](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8) - is a certain sequence of numbers. The ratio between the numbers is close to the [golden ratio](https://ru.wikipedia.org/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B5_%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5), which is used in [art](https://en.wikipedia.org/wiki/List_of_works_designed_with_the_golden_ratio) for its aesthetic properties.

Why are we interested in calculating numbers in a sequence? Not for the sake of the numbers themselves, but because the sequence represents a real system of rules that we can model in code.

The sequence is built according to a few simple rules:

- The sequence starts at 0 and 1.
- The next number in the sequence is the sum of the last two numbers in the sequence.

![building Fibonacci sequence](readme-assets/build_fibonacci_sequence.gif)

*Figure 1*. Building the Fibonacci sequence.

Following these rules, you can build the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13 ... (Figure. 1).

### Release 0. Iterative calculation of the n-th Fibonacci number

Write a function that returns the nth number in the Fibonacci sequence. For this release, you need to use an iterative approach. You will also need to write your own tests.

### Release 1. Recursive calculation of the n-th Fibonacci number

Now write the same function using a recursive algorithm. You will also need to write your own tests.


## Conclusion

This task gave you another opportunity to complete the task using different implementations: iterative and recursive. Try to implement each of these methods so that in the future you can choose and use the most appropriate method, depending on the situation.

More information about the Fibonacci sequence can be found [here](readme-assets/fib_description.md) (eng).
