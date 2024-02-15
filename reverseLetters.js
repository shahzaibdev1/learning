/**
 * * Given a string S, return the reversed string where all characters that are not a string letter stay in the same place, and all letters reverse positions.
 *
 * Example 1:
 * input: ab-cd
 * output: dc-ba
 *
 * Example 2:
 * input: a-bC-dEf-ghIj!!
 * output: jIhg-fEd-Cb-a
 */

const reverseOnlyLetters = (S) => {
  const orig = S;
  let res = "";
  let last = orig.length - 1;

  const runFinder = (origAt, idx) => {
    if (/[a-zA-Z0-9]/.test(orig[last])) {
      // If the current character is alphabetic, add it to result and move towards right

      res += orig[last];
      last = last - 1;
    } else {
      last = last - 1;
      runFinder(origAt, idx);
    }
  };

  for (let i = 0; i < orig.length; i++) {
    if (!/[a-zA-Z0-9]/.test(orig[i])) res += orig[i];
    else {
      runFinder(orig[i], i);
      // last = last - 1;
    }
  }

  return res;
};

let res = reverseOnlyLetters("ab-cd");
console.log(res);
