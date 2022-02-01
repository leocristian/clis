const yargs = require("yargs")

const options = yargs
 .usage("Usage: download -u <urlFromYoutubeVideo> ")
 .option("u", { alias: "urlFromYoutubeVideo" , describe: "URL from some youtbe video", type: "string", demandOption: false})
 .argv;
