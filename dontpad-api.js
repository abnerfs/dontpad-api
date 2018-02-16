
/* 
    Author: Abner Ferreira Santos
    GitHub: https://www.github.com/abnerfs/dontpad-api
*/

const url = 'http://www.dontpad.com/';
const request = require('request');
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
    const options = {
        host: url + dontPad,
        path: "/"
    };
    
    let content = "";   
    
    return new Promise((resolve, reject) => {
        request(url + dontPad, (err, response, body) =>{
            if(err)
            {
                reject(err);
                return;
            }
    
            const dom = new JSDOM(body);
            let text = dom.window.document.getElementById('text').innerHTML;
            resolve(text);
        });
    }) 
}

module.exports = {
    writeContent,
    readContent
}


