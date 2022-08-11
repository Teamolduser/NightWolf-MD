
let handler = async (m, { conn, args, usedPrefix, owner }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
        let users = global.db.data.users
        let pajak = 0.05
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        global.db.data.users[who].money -= count * pajak
                        conn.reply(m.chat, `Berhasil mentransfer money sebesar *${count}* \n Dipotong pajak Sebesar 5% (${count * pajak})`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim(), m)
                break 
            case 'atm':
                if (global.db.data.users[m.sender].bank >= count * 1) {
                    try {
                        global.db.data.users[m.sender].bank -= count * 1
                        global.db.data.users[who].bank += count * 1
                        global.db.data.users[who].bank -= pajak * count
                        conn.reply(m.chat, `Berhasil mentransfer money ke atm sebesar *${count}* \n Dipotong pajak Sebesar 5% (${count * pajak})`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].bank += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tabungan kamu tidak mencukupi untuk mentransfer atm sebesar ${count}`.trim(), m)
                break 
             case 'exp':
                if (global.db.data.users[m.sender].exp >= count * 1) {
                    try {
                        global.db.data.users[m.sender].exp -= count * 1
                        global.db.data.users[who].exp += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer exp sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].exp += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Exp kamu tidak mencukupi untuk mentransfer Exp sebesar ${count}`.trim(), m)
                break
             case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer limit sebesar ${count}`.trim(), m)
                       // conn.reply(who, `Selamat mendapatkan limit sebesar ${count}\nFrom: *Owner*`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk mentransfer Limit sebesar ${count}`.trim(), m)
                break
            case 'sampah':
                if (global.db.data.users[m.sender].sampah >= count * 1) {
                    try {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[who].sampah += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer sampah sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].sampah += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Sampah kamu tidak mencukupi untuk mentransfer Sampah sebesar ${count}`.trim(), m)
                break
            case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        try {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[who].potion += count * 1
                            conn.reply(m.chat, `Berhasil mentransfer potion sebesar ${count}`.trim(), m)
                        } catch (e) {
                            global.db.data.users[m.sender].potion += count * 1
                            m.reply('Gagal Menstransfer')
                            console.log(e)
                            if (owner) {
                                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                    conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                                }
                            }
                        }
                    } else conn.reply(m.chat, `Potion kamu tidak mencukupi untuk mentransfer Potion sebesar ${count}`.trim(), m)
                    break
             case 'diamond':
                if (global.db.data.users[m.sender].diamond >= count * 1) {
                    try {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[who].diamond += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer diamond sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].diamond += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Diamond kamu tidak mencukupi untuk mentransfer Diamond sebesar ${count}`.trim(), m)
                break 
             case 'common':
                if (global.db.data.users[m.sender].common >= count * 1) {
                    try {
                        global.db.data.users[m.sender].common -= count * 1
                        global.db.data.users[who].common += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer common sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].common += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Common kamu tidak mencukupi untuk mentransfer Common sebesar ${count}`.trim(), m)
                break 
             case 'uncommon':
                if (global.db.data.users[m.sender].uncommon >= count * 1) {
                    try {
                        global.db.data.users[m.sender].uncommon -= count * 1
                        global.db.data.users[who].uncommon += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer uncommon sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].uncommon += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uncommon kamu tidak mencukupi untuk mentransfer Uncommon sebesar ${count}`.trim(), m)
                break 
             case 'mythic':
                if (global.db.data.users[m.sender].mythic >= count * 1) {
                    try {
                        global.db.data.users[m.sender].mythic -= count * 1
                        global.db.data.users[who].mythic += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer mythic sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].mythic += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Mythic kamu tidak mencukupi untuk mentransfer Mythic sebesar ${count}`.trim(), m)
                break 
             case 'legendary':
                if (global.db.data.users[m.sender].legendary >= count * 1) {
                    try {
                        global.db.data.users[m.sender].legendary -= count * 1
                        global.db.data.users[who].legendary += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer legendary sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].legendary += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Legendary kamu tidak mencukupi untuk mentransfer Legendary sebesar ${count}`.trim(), m)
                break 
             case 'emas':
                if (global.db.data.users[m.sender].emas >= count * 1) {
                    try {
                        global.db.data.users[m.sender].emas -= count * 1
                        global.db.data.users[who].emas += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer gold sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].emas += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Emas kamu tidak mencukupi untuk mentransfer Emas sebesar ${count}`.trim(), m)
                break 
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List yang bisa di transfer*\nMoney\nExp\nLimit\nPotion\nSampah\nDiamond\nCommon\nUncommon\nMythic\nLegendary`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
        console.log(e)
        if (owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['transfer']
handler.tags = ['rpg']
handler.command = /^(transfer)$/i
handler.owner = false
handler.mods = false

handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler