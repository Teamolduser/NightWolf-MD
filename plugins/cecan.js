/*let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("cecan","ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i

module.exports = handler*/

let handler = async (m, { conn }) => {
   let img = 'https://api.zacros.my.id/asupan/cecan'
      conn.sendButtonImg(m.chat, img, 'Sayang....', wm, 'NEXT', '.cecan', m)
   }
   handler.help = ['cecan']
   handler.tags = ['internet']
   handler.command = /^(cecan)$/i
         
   module.exports = handler