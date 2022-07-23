/*let { makeInMemoryStore } = require('@adiwajshing/baileys-md')
let pino = require('pino')
let handler = async (m, { conn, owner, args }) => {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const botNumber = await conn.decodeJid(conn.user.id)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    conn.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler*/

/*const {
  makeInMemoryStore,
  makeWALegacySocket
} = require('@adiwajshing/baileys-md')
const pino = require('pino')
const chalk = require('chalk')

let handler = async (m, { conn, args }) => {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const botNumber = await conn.decodeJid(conn.user.id)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), conn.user.id]
                    conn.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler*/


/*
let { makeInMemoryStore } = require('@adiwajshing/baileys-md')
let pino = require('pino')
let handler = async (m, { conn, args }) => {
  const conn = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(conn.chats.presences(id)), conn.user.jid]
  conn.reply(m.chat, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { mentionedJid: online })
}
handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler*/


/*
const { makeInMemoryStore } = require("@adiwajshing/baileys-md")
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')

let handler = async (m, { conn, args }) => {
	                const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(conn.chats.get[id].presences), conn.user.jid]
                    conn.reply(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }

handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

// handler.fail = null

module.exports = handler*/
