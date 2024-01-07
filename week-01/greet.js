const readline = require('node:readline');
const { stdin: input, stdout: output} = require("node:process")

const rl = readline.createInterface({ input, output });

rl.question(`What is your name ?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});
