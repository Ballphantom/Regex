import { isMatch } from "./model";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter string s: ", (s: string) => {
  rl.question("Enter pattern p: ", (p: string) => {
    const result = isMatch(s, p);
    console.log(`s: ${s}`);
    console.log(`p: ${p}`);
    console.log(`result: ${result}`);
    rl.close();
  });
});

// /**
//  * isMatch
//  *
//  * Write a function that takes two strings as arguments, `s` and `p`,
//  * and returns a boolean denoting whether `s` matches `p`.
//  *
//  * `p` is a non-empty sequence of any number of the following:
//  *   1. a-z - which stands for itself
//  *   2. . - which matches any character
//  *   3. * - which matches 0 or more occurrences of the previous single character
//  *
//  * @param {string} s - string
//  * @param {string} p - pattern
//  * @returns {boolean} - whether `s` matches `p`
//  *
//  * Expecting
//  *
//  * isMatch("aba", "ab"),     => Expected: false, Actual: false
//  * isMatch("aa", "a*"),      => Expected: true, Actual: true
//  * isMatch("ab", ".*"),      => Expected: true, Actual: true
//  * isMatch("ab", "."),       => Expected: false, Actual: false
//  * isMatch("aab", "c*a*b"),  => Expected: true, Actual: true
//  * isMatch("aaa", "a.*"),    => Expected: true, Actual: true
//  */