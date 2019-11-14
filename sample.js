const dontpad = require('./dontpad-api');

const dontPadTarget = 'testdontpad/1.0.5';

dontpad.writeContent(dontPadTarget, 'This is a test 1.0.5 ')
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

