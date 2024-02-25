# Dungeon-Delver

## Technologies Used and Why

### Next.js
Next.js is a React Framework that has the following advantages that made it beneficial to our project
- Speed: it is fast to load the webpage and to compile when developing - allowing for a responsive website and a smooth development cycle
- Backend: easy and fast backend integration 
- Routing: page routing in Next is simple and efficient, again aiding development
- Support with other libraries: Next supports the other libraries that are used in the project with ease

### Typescript
Typescript is a compiled version of Javascript that supports types. This is used in the project to allow for greater code quality.

### Prisma
Prisma is a database communication tool. It utilises familiar database scheme and easy integration with Next.js that makes communication with databases simple and straightforwad.

## Running the Website
First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Help

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

The idea is that Next.js configures both the front end and the back end of the website - without much use of alternative frameworks.

## Using Git

To start writing code, create a branch

``` 
git checkout -b <branch-name>
```

Branch names can be anything but include your initials (so we know who authors what change) and some information about what the branch contains.

Try to keep each branch or commit confined to one domain. For example, if you need to edit both the frontend and backend, be sure to do this on different branches and different commits. 

Then, write some code!

When you are done and want to push it, run the following command

```
git add .
```

This stages all your changes for a commit - i.e. it means that all of the files that you have changed on your machine will be changed on the git repository. 

Commit the changes using the following command:

```
git commit -m "<commit-message>"
```

Commit messages need to start capitalised and describe the changes briefly, in the present tense. 

For example, suppose that I made a commit that changes this file, the commit message would be `Changes README.md` or something along those lines.

Navigate to the repository and create a merge request.

Our repository is private so we cannot protect the main branch but please do not merge the branch straight away, even if Git approves it. 

For greater code quality we need to make sure that people approve the merge request and that it fulfills the requirement or task as needed.

Once your merge request has been approved by the rest of the team, your code has been integrated into the website! Well done! 