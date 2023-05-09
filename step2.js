"use strict";

const fsP = require('fs/promises')
const axios = require("axios")

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

async function webCat(url) {
  try {
    let contents = await axios.get(url)
    console.log(contents.data)

  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

if (process.argv[2].includes("http")) {
  webCat(process.argv[2])
} else {
  cat(process.argv[2])
}