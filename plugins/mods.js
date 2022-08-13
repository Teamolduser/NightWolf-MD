function handler(m) {
    const data = global.mods.filter(([id, isMods]) => id && isMods)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  }
  handler.help = ['moderator']
  handler.tags = ['info']
  
  handler.command = /^(mods|moderator)$/i
  
  module.exports = handler