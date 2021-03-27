const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => res.send('ZORO YT'));
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODI1MjM5MTg4NTg0NjYwOTkz.YF7B4g.XZR9GHKuoVX249platTwWu6X6EY", 
prefix: "!z" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
} 
}

bot.status({
  text: "Test Bot",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Subscribe To Zoro",
  type: "WATCHING",
  time: 12
})