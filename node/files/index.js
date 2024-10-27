const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter filename: ', filename => {
    readline.question('Enter some text: ', text => {
        fs.writeFileSync(`${filename}.txt`, text, (err => {
            if (err) throw err;
            console.log('File created successfully.');
            readline.close();
        }));
    })
})