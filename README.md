<p align='center'>
  <a href="https://github.com/saibhreas">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white">
  </a>
  
  <a href='https://www.linkedin.com/in/siobhanknuttel'>
      <img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>
  </a>
</p>

# ![node icon](./assets/img/NodeJS_small.png)  10 Object-Oriented Programming: Team Profile Generator

## Contributors: Saibhreas
  
### Github User: https://github.com/saibhreas
  
#### Email: fullstack@saibhreas.com
  
## Purpose: 

Fulfill Assignment # 10 Rutgers Fullstack program

  * Build CLI using Node js + Inquirer.  

  * Demonstrate basic understanding of nodes use of *module.exports* and *class A extends The base module* to accomplish  data grouping.

  * Demonstrate classes in jest testing. *Classes and specific properties were given by Rutgers Fullstack curriculum.*

  * App must generate html file with data collected from prompts.  
    Html must have workable window/ links open to page generated from employee card e.g. email program opens on email address. 
    
    Format is a team building dashboard. 
  
  * A working Github repository must exist for task completion, with link to walk thru video.

## Table of Content
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Technologies](#technologies)
  5. [Links](#links)
  
## Description

App is a Node JS / Inquirer CLI.  It collects input thru prompts and returns data to populate an html page.  Html page displays summaries of catagorical data of employees as base unit.

### Base Unit

Employee contains:
  * name
  * id
  * email

### Second Unit: returns ROLE
Manager class extends Employee:
  * office number
  * returns Manager

Engineer class extends Employee:
  * Github user name
  * returns  Engineer

Intern class extends Employee:
  * School
  * returns Intern



Link to video walk through:https://youtu.be/6mTPX4MozsY

## Installation

Create node environment by creating work folder and create package.json.

    NPM init 

Add dependencies

    npm install inquirer
    npm i jest
    //or
    npm install --save-dev jest

## Usage

Free to read and fork.

License: MPL 2.0

## Technologies

Environment  VS code

Node JS: Jest  Inquirer

HTML

## Links

https://youtu.be/6mTPX4MozsY
