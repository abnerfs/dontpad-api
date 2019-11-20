# Dontpad API

![Downloads](https://img.shields.io/npm/dt/dontpad-api "Downloads")

An unofficial API to read and write content to http://dontpad.com

# Requirements
- NodeJS

# Installation
```npm install --save dontpad-api```


# Usage

- Import the api to your file
```javascript 
const dontpad = require('dontpad-api');
```

# Functions

**writeContent(dontPad, text)**: Write the specified text to the specified dontpad url.

**readContent(dontPad)**: Retrieves the content of the specified dontpad url.

# Sample 

Writing and Reading content to a dontpad url

```javascript
const dontpad = require('dontpad-api');

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
