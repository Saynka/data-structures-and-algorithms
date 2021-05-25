# Quick Sort

## Challenge Description

- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Approach & Efficiency

- Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.

- Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.

- Repeat this process individually for the left and right side of the pivot, until the array is sorted.

## Solution

![Quick Sort](../../../../assets/Sorting.gif)

## refrences

- https://stackabuse.com/quicksort-in-javascript/
