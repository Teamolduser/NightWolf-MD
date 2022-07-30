/*let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("loli","loli kawai","loli sagiri","anime loli","loli cat").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler*/

let handler = async (m, { conn }) => {
let img = 'https://api-reysekha.herokuapp.com/api/wallpaper/loli?apikey=APIKEY'
   conn.sendButtonImg(m.chat, img, 'Onii-Chan', wm, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
   
module.exports = handler