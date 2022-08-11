
let handler = async (m, { conn, args, usedPrefix, owner }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan format ${usedPrefix}oadd <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}oadd money 100 @tag*`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
      //  let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        let who = no(args[2]) + "@s.whatsapp.net"
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                    try {
                        global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil memberikan money sebesar ${count}`.trim(), m)
                    } catch (e) {
                        m.reply('Gagal Memberikan')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                break 
             case 'exp':
                    try {
                        global.db.data.users[who].exp += count * 1
                        conn.reply(m.chat, `Berhasil memberikan exp sebesar ${count}`.trim(), m)
                    } catch (e) {
                        m.reply('Gagal Memberikan')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                break
             case 'limit':
                    try {
                        global.db.data.users[who].limit += count * 1
                        //conn.reply(m.chat, `Berhasil mentransfer limit sebesar ${count}`.trim(), m)
                        conn.reply(who, `Selamat mendapatkan limit sebesar ${count}\nFrom: *Owner*`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal Memberikan')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                break
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}oadd <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}oadd money 100 @tag*\n\n*List yang bisa di transfer*\nMoney\nExp\nLimit`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}oadd <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}oadd money 100 @tag*`.trim(), m)
        console.log(e)
        if (owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['oadd']
handler.tags = ['owner']
handler.command = /^(oadd)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler


function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }