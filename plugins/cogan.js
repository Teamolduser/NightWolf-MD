/*let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i

module.exports = handler*/

let handler = async (m, { conn }) => {
let img = 'https://api-reysekha.herokuapp.com/api/wallpaper/cogan?apikey=APIKEY'
   conn.sendButtonImg(m.chat, img, 'Ganteng kan gua :)', wm, 'NEXT', '.cogan', m)
}
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i
      
module.exports = handler