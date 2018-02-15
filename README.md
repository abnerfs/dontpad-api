# dontpad-api
An unofficial API to read and write content to www.dontpad.com

# Requirements
- NodeJS

# Installation
- Clone or download the project.
- Open the cloned folder in command line and type **npm install** or **yarn** if you have it installed 

# Usage

- Import the api to your file
```javascript 
const dontpad = require('dontpad');
```

# Functions

**writeContent(dontPad, text)**: Write the specified text to the specified dontpad url.

**readContent(dontPad)**: Retrieves the content of the specified dontpad url.

# Sample 

Writing and Reading content to a dontpad url

```javascript
const dontpad = require('./dontpad');

const dontPadTarget = 'testdontpad';

dontpad.writeContent(dontPadTarget, 'This is a test ')
    .then(response => {
        console.log('Saved succesfully...');
        
        dontpad.readContent(dontPadTarget)
            .then(conteudo => {
                console.log("Reading dontpad content... ");
                console.log('Content: ', conteudo);
                console.log('Check the content in http://dontpad.com/' + dontPadTarget);
            }).catch(err => {
                console.log('Error reading dontpad ', err)  
            });
    })
    .catch(err => {
        console.log('Error saving dontpad ', err);
    })



```
