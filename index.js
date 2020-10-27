#!/usr/bin/env node
/*
 * Name: Command Line Tools Monitor
 * Author: Elie BENAYOUN
 * Date: 02/05/18
 */

/*
** Importation des librairie associé au programme
 */
const program = require('commander');
const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
** Récuperation de l'url.
 */
function getUrlPrompt() {
    return new Promise((resolve, reject ) => {
        rl.question('Enter a valid url begin with http://...', (url) => {
            console.log(`You choose: ${url}`);
            rl.close();
            resolve(url);
        });
    })
}

/*
** Requête http et récupération du code.
 */
function getStatutCode(url){
    axios.get(url)
        .then(function(response) {
            console.log(response.status);
        });
}

/*
** Horodatage.
 */
function getDate(){
    toto = new Date().toLocaleTimeString('eu-PA', {
        year: "numeric",
        day: "numeric",
        month: "numeric",
        hour: "numeric",
        minute: "numeric"});
    console.log(toto);
}

/*
** Ecriture de la réponse dans une fichier.
 */
function setLogFile() {
    let logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
    logStream.write('\n');
}

/*
** Commander make your program a package.
 */

program
    .version('0.1.0')
    .option('-s, --statut', 'get statut code')
    .option('-l, --log', 'Add to your log file')
    .parse(process.argv);

async function main(){
    if(program.statut) {
        const url = await getUrlPrompt();
        await getStatutCode(url);
    }
    if(program.log) {
        const url = await getUrlPrompt();
        await getStatutCode(url);

    }
}
main();