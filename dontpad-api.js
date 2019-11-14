
/* 
    Author: Abner Ferreira Santos
    GitHub: https://www.github.com/abnerfs/dontpad-api
*/

const url = 'http://www.dontpad.com/';
const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


function writeContent(dontPad, text){
    return fetch(`${url}${dontPad}`, {
        method: 'POST',
        body: `text=${text}`,
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode: 'no-cors'
    });
}


function readContent(dontPad){
    return fetch(`${url}${dontPad}`)
        .then(res => res.text())
        .then(body => {
            const dom = new JSDOM(body);
            return dom.window.document.getElementById('text').innerHTML;
        })
}

const dontpad = {
    writeContent,
    readContent
}

module.exports = dontpad;


