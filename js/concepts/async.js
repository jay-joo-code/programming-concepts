/* TOPIC: JS is single threaded, which means it can only handle one statement at a time */

/* TOPIC: the event loop handles concurrency by managing which statment should be executed at a given time */

/* TOPIC: there are 3 ways to handle asynchronous code in JS 

1. callback 
> classical way of handling asynchronous code
- multiple nested callbacks can lead to unreadable code (callback hell)

2. promise
+ stateful (unlike callbacks): pending, fulfilled, rejected
+ built-in error handling (unlike callbacks): then, catch, finally
+ improves code readability

3. async await
> handles asynchronous with syntax that looks synchronous
*/


