const fs = require('fs');
const path = require('path');



function createFolder() {
    
    console.log();
        return fs.mkdir(path.join(process.cwd(), 'dist'), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
        })
    
}

module.exports.createFolder = createFolder
