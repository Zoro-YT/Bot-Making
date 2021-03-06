const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "BOT-TOKEN-HERE", 
prefix: "!" 
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
