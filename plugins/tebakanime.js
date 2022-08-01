let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
  //let res = await fetch(global.API('restapi', '/api/tebak-anime', {}, 'apikey'))
  if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/NightWolf324/scrape/tebakanime.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  //if (res.status !== 200) throw await res.text()
  //let json = await res.json()
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}nime untuk clue
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebakanime[id] = [
    //await conn.sendFile(m.chat, json.img, 'tebakanime.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    await conn.sendButtonImg(m.chat, json.img, caption, wm, 'Bantuan', '.nime', m),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanime[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Tebak Anime', '.tebakanime', conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

handler.group = true

module.exports = handler