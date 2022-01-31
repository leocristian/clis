#!/usr/bin/env node

const yargs = require("yargs")
const translate = require("translate-google-api")

const options = yargs
 .usage("Usage: translate -i <inputCodeLang> -o <outputCodeLang> -t <inputText>")
 .option("i", { alias: "inputCodeLang", describe: "Input code language", type: "string", demandOption: true })
 .option("o", { alias: "outputCodeLang" , describe: "Output code language", type: "string", demandOption: true})
 .option("t", { alias: "inputText", describe: "Input text to translate", type: "array", demandOption: true})
 .argv;


async function translateText() {
    console.clear()

    console.log("Traduzindo texto...")
    const result = await translate(options.t.toString(), {
        tld: options.i,
        to: options.o
    })
    console.clear()
    
    console.log(result[0])

}

translateText()