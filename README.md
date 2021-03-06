# Data Structures and Algorithms

## Table of Contents

### JavaScript

#### Pre-work

- [301-Code Challenges](code-challenges)

#### Main-Course

- [array_reverse](https://github.com/Saynka/data-structures-and-algorithms/tree/master/javascript/code-challenges/arrayReverse)
- [array_shift](https://github.com/Saynka/data-structures-and-algorithms/tree/master/javascript/code-challenges/arrayShift)
- [array_binary_search](https://github.com/Saynka/data-structures-and-algorithms/tree/master/javascript/code-challenges/arrayBinarySearch)
- [linked_lists_lab5](https://github.com/Saynka/data-structures-and-algorithms/tree/master/javascript/code-challenges/linkedList)
- [linked_lists_lab6](https://github.com/Saynka/data-structures-and-algorithms/tree/master/javascript/code-challenges/linkedList)

### Python

- [array_reverse](../python/code_challenges/array_reverse/README.md)
- [array_shift](../python/code_challenges/array_shift/README.md)
- [array_binary_search](../python/code_challenges/array_binary_search/README.md)
  <!-- * [](../python/code_challenges//README.md) -->
  <!-- * [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md)
- [](../python/code_challenges//README.md) -->

## Create a copy of this repository

1. Create a new repository in your GitHub account called `data-structures-and-algorithms`
1. Clone the empty repository to your machine
1. Choose the "Download" option under "Clone or Download" for this repository
1. Copy that .zip file inside of the local `data-structures-and-algorithms` repo created in step 2
1. Unzip the file there
1. Remove the .zip file
1. Run the command `npm install` from the repository root directory
1. Do an `ACP` of the `data-structures-and-algorithms` repository

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Each Data Structure should be implemented separately in a language specific manner, in a properly named folder.
  - i.e. `linked-lists`
- For daily challenges:
  - Each implementation should have a challenges folder, named `challenges`
  - Within the challenges folder, a subfolder bearing the name of the challenge
    - i.e. `remove-duplicates`
  - Within the proper subfolder:
    - A README.md that will house your challenge summary, whiteboard photos
    - Your implementation and tests for the code challenge
    - Perform your work in accordance with your 401 language's instructions

The final structure should resemble this:

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |
  ├── [language]
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── ...
  |
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```
