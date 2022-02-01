#!/usr/bin/env node

const yargs = require("yargs")
const translate = require("translate-google-api")

const options = yargs
 .usage("Usage: translate -o <outputCodeLang> -t <inputText>")
 .option("o", { alias: "outputCodeLang" , describe: "Output code language", type: "string", demandOption: false})
 .option("t", { alias: "inputText", describe: "Input text to translate", type: "string", demandOption: false})
 .argv;

 
 async function translateText() {
     console.clear()
     
    console.log("Traduzindo texto...")
    const result = await translate(options.t, {
        tld: "",
        to: options.o
    })
    console.clear()
    
    console.log(result[0])

}

translateText()