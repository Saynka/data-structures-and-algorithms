# Merge sort

## Challenge Description

- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Approach & Efficiency

- Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).

- Continue dividing the subarrays in the same manner until you are left with only single element arrays.

- Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.

- Repeat step 3 unit with end up with a single sorted array.

## Solution

![Merge Sort](../../../../assets/merge.gif)

## refrence

- https://stackabuse.com/merge-sort-in-javascript/
