const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODI1MjM5MTg4NTg0NjYwOTkz.YF7B4g.E39LofPv3rqofK6rIXVhPzpDm3M", 
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