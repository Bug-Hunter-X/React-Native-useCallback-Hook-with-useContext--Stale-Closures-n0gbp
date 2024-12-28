# React Native useCallback Hook with useContext: Stale Closures
This repository demonstrates a common error when using the `useCallback` hook in React Native with values from `useContext`.  The issue arises because `useCallback` only memoizes the function itself, not its dependencies from the context.  When the context value changes, the callback remains unchanged, leading to stale closures.

## Bug Reproduction
The `useCallbackContextBug.js` file showcases the problem.  Observe the unexpected behavior when the context value updates. 

## Solution
The `useCallbackContextSolution.js` file demonstrates how to solve this. The solution involves passing the context value as a dependency to `useCallback` which forces a re-creation of the callback whenever the value changes.