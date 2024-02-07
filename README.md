# Dungeon Delver (ESP Project Group 15)

# Table of Contents
1. [Dungeon Delver (ESP Project Group 15)](#dungeon-delver-esp-project-group-15)
2. [Languages and Frameworks Used](#languages-and-frameworks-used)
3. [Prerequisites](#prerequisites)
4. [Development Guidelines](#development-guidelines)
5. [Getting Started](#getting-started)
   1. [Install Git](#1-install-git)
   2. [Clone the Repository](#2-clone-the-repository)
   3. [Navigate to the Project Folder](#3-navigate-to-the-project-folder)
   4. [Create a branch](#4-create-a-branch)
   5. [Make changes and commit](#5-make-changes-and-commit)
   6. [Push changes](#6-push-changes)
   7. [Open a pull request](#7-open-a-pull-request)
6. [Unit Testing](#unit-testing)
   1. [Install Dependencies](#1-install-dependencies)
   2. [Writing Unit Tests](#2-writing-unit-tests)
   3. [Code Coverage](#3-code-coverage)


## Languages and Frameworks Used
- HTML
- Javascript
    - React
    - Node.js
    - Jest (for testing)
- CSS

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Development Guidelines
- Adhere to the [style guide](lhttps://google.github.io/styleguide/jsguide.html) for code consistency.
- Write clear and concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.


## Getting Started

### 1. Install Git
Download and install Git on your machine. You can find the installation instructions for your operating system [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### 2. Clone the Repository
Clone this repository using the following command 

```bash
git clone https://github.com/hd2802/Dungeon-Delver
```

### 3. Navigate to the Project Folder

``` bash
cd ~/path/to/project/folder/folder-name
```

### 4. Create a branch
This is important that you create a branch before doing any work on the project

``` bash
git checkout -b branch-name
```

We are using the branch naming convention of

```bash
initials-issuenumber
```

For example, if I was tacking issue number 69 the branch would be called

```bash
mhd-issue69
```

### 5. Make changes and commit
Make your changes to the code and use the following commands to commit them

```bash
git add .
git commit -m "resolves issue #<issue-number>"
```

This provides a link to the relevant issue (which should provide a sufficient description of the commit).

If the change is not linked to an issue, use the following commit conventions found [here](https://www.conventionalcommits.org/en/v1.0.0/)

### 6. Push changes
Push your changes to the remote repository

```bash
git push origin <branch-name>
```

### 7. Open a pull request
Got to the GitHub repository. You should see a prompt to create a pull request. Follow the steps to submit changes for review

## Unit Testing
Generally, if you are writing some Javascript code, then it is expected that you will also write some unit tests to test the functionality of the code that you have written.

These tests are simple to write but ensures that the functionality of your code is as expected.

Use the following guide on testing.

### 1. Install Dependencies
Before running tests, make sure to install the project dependencies:

```bash
npm install
```

### 2. Writing Unit Tests
To write unit tests, following the [Jest documentation](https://jestjs.io/) is typically the best avenue to follow

### 3. Code Coverage
Jest provides code coverage reports to help you identify areas of your codebase that lacks test coverage. To generate a coverage report, run:

```bash
npm test -- --coverage
```


