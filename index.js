const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const fetchData = async () => {

    const req = https.get('https://coderbyte.com/api/challenges/json/age-counting', res => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            const jsonData = JSON.parse(data);
            const dataArray = jsonData.data.split(' ');

            const dataMap = {};

            for (let i = 0; i< dataArray.length; i+= 2) {
                const key = dataArray[i].replace('key=', '').replace(',', '');
                const age = parseInt(dataArray[i+1].replace('age=', '').replace(',', ''));
                

                dataMap[key]=age;
            }

            let keyArr = []
            
            for ( const key in dataMap ) {
                if ( dataMap[key] === 32 ) {
                    keyArr.push(key)
                }
            }

            const writeStream = fs.createWriteStream('output.txt');

            keyArr.forEach(element => {
                writeStream.write(`${element}\n`);
            });
            
            const fileBuffer = fs.readFileSync('output.txt');
            const hashSum = crypto.createHash('sha256');
            hashSum.update(fileBuffer);

            const hex = hashSum.digest('hex');

            const challengeToken = 'cuhm3ivae8';

            let challengeTokenArr = challengeToken.split('');
        
            hashResult = hex.split('').filter(char => !challengeTokenArr.includes(char)).join('');
            console.log(hashResult);
        });
       
        req.on('error', (error) => {
            console.error('Error', error.message)
        });

        req.end();

    });
}

fetchData();