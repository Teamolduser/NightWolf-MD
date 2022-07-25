/*let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0895-3303-79186]
│ •  [0896-5436-0447]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
*/
let handler = async m => m.reply(`
Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
╭─「 Donasi • Pulsa 」
│ •  Indosat Ooredoo [081548286895]
╰────

╭─「 Donasi • Emoney 」
│ • Gopay [081548286895]
│ • Dana [081548286895]
╰────
Berapapun donasi kalian akan sangat berarti 👍
*Donasi yang kalian kirim digunakan untuk keperluan Server agar terus berjalan*
*donasi via follow ig juga boleh*

Arigatou!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler