let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {

/*let type = (args[0] || '').toLowerCase()
                  switch (type) {*/
                              //case '1':

                             //case '3':
                             if (global.db.data.users[m.sender].kerjasatu > 1) {
                                              // let meqew = m.sender.replace(/@.+/, '')
                                                  let aquaqew = global.db.data.users[m.sender].aqua 
                                                  let healthqew = global.db.data.users[m.sender].health
                                                  let __waktuqew = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqew = (86400000 - __waktuqew)
                                                  let waktuqew = clockString(_waktuqew)
                                                  if (aquaqew == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqew == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  let _healingqew = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqew = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqew = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqew = (_healingqew * 1)
                                                  let expqew = (_expqew * 1)
                                                  let moneyqew = (_moneyqew * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqew
                                                  global.db.data.users[m.sender].exp += expqew
                                                  global.db.data.users[m.sender].money += moneyqew
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasatu -= 2
                                                  global.db.data.users[m.sender].kerjadua += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqew = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqew} Money\n+${expqew} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqew} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqew, m)
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqew} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 1 coba absen terlebih dahulu`)
                            //break
                            //case '3':
                            else if (global.db.data.users[m.sender].kerjadua > 1) {
                                              // let meqee = m.sender.replace(/@.+/, '')
                                                  let aquaqee = global.db.data.users[m.sender].aqua 
                                                  let healthqee = global.db.data.users[m.sender].health
                                                  let __waktuqee = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqee = (86400000 - __waktuqee)
                                                  let waktuqee = clockString(_waktuqee)
                                                  if (aquaqee == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqee == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  let _healingqee = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqee = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqee = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqee = (_healingqee * 1)
                                                  let expqee = (_expqee * 1)
                                                  let moneyqee = (_moneyqee * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqee
                                                  global.db.data.users[m.sender].exp += expqee
                                                  global.db.data.users[m.sender].money += moneyqee
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjadua -= 2
                                                  global.db.data.users[m.sender].kerjatiga += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqee = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqee} Money\n+${expqee} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqee} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqee, m)
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqee} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 2 coba absen terlebih dahulu`)
                            //break
                            //case '4':
                            else if (global.db.data.users[m.sender].kerjatiga > 1) {
                                              // let meqer = m.sender.replace(/@.+/, '')
                                                  let aquaqer = global.db.data.users[m.sender].aqua 
                                                  let healthqer = global.db.data.users[m.sender].health
                                                  let __waktuqer = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqer = (86400000 - __waktuqer)
                                                  let waktuqer = clockString(_waktuqer)
                                                  if (aquaqer == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqer == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {

                                                  let _healingqer = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqer = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqer = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqer = (_healingqer * 1)
                                                  let expqer = (_expqer * 1)
                                                  let moneyqer = (_moneyqer * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqer
                                                  global.db.data.users[m.sender].exp += expqer
                                                  global.db.data.users[m.sender].money += moneyqer
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjatiga -= 2
                                                  global.db.data.users[m.sender].kerjaempat += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqer = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqer} Money\n+${expqer} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqer} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqer, m)
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqer} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 3 coba absen terlebih dahulu`)
                            //break
                            //case '5':
                            else if (global.db.data.users[m.sender].kerjaempat > 1) {
                                              // let meqet = m.sender.replace(/@.+/, '')
                                                  let aquaqet = global.db.data.users[m.sender].aqua 
                                                  let healthqet = global.db.data.users[m.sender].health
                                                  let __waktuqet = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqet = (86400000 - __waktuqet)
                                                  let waktuqet = clockString(_waktuqet)
                                                  if (aquaqet == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqet == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  let _healingqet = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqet = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqet = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqet = (_healingqet * 1)
                                                  let expqet = (_expqet * 1)
                                                  let moneyqet = (_moneyqet * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqet
                                                  global.db.data.users[m.sender].exp += expqet
                                                  global.db.data.users[m.sender].money += moneyqet
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaempat -= 2
                                                  global.db.data.users[m.sender].kerjalima += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqet = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqet} Money\n+${expqet} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqet} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqet, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqet} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 4 coba absen terlebih dahulu`)
                            //break
                            //case '6':
                            else if (global.db.data.users[m.sender].kerjalima > 1) {
                                              // let meqey = m.sender.replace(/@.+/, '')
                                                  let aquaqey = global.db.data.users[m.sender].aqua 
                                                  let healthqey = global.db.data.users[m.sender].health
                                                  let __waktuqey = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqey = (86400000 - __waktuqey)
                                                  let waktuqey = clockString(_waktuqey)
                                                  if (aquaqey == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqey == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqey = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqey = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqey = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqey = (_healingqey * 1)
                                                  let expqey = (_expqey * 1)
                                                  let moneyqey = (_moneyqey * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqey
                                                  global.db.data.users[m.sender].exp += expqey
                                                  global.db.data.users[m.sender].money += moneyqey
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjalima -= 2
                                                  global.db.data.users[m.sender].kerjaenam += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqey = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqey} Money\n+${expqey} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqey} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqey, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqey} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 5 coba absen terlebih dahulu`)
                            //break
                            //case '7':
                            else if (global.db.data.users[m.sender].kerjaenam > 1) {
                                              // let meqeu = m.sender.replace(/@.+/, '')
                                                  let aquaqeu = global.db.data.users[m.sender].aqua 
                                                  let healthqeu = global.db.data.users[m.sender].health
                                                  let __waktuqeu = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeu = (86400000 - __waktuqeu)
                                                  let waktuqeu = clockString(_waktuqeu)
                                                  if (aquaqeu == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeu == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqeu = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeu = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeu = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeu = (_healingqeu * 1)
                                                  let expqeu = (_expqeu * 1)
                                                  let moneyqeu = (_moneyqeu * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeu
                                                  global.db.data.users[m.sender].exp += expqeu
                                                  global.db.data.users[m.sender].money += moneyqeu
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaenam -= 2
                                                  global.db.data.users[m.sender].kerjatujuh += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeu = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeu} Money\n+${expqeu} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeu} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeu, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeu} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 6 coba absen terlebih dahulu`)
                            //break
                            //case '8':
                            else if (global.db.data.users[m.sender].kerjatujuh > 1) {
                                              // let meqei = m.sender.replace(/@.+/, '')
                                                  let aquaqei = global.db.data.users[m.sender].aqua 
                                                  let healthqei = global.db.data.users[m.sender].health
                                                  let __waktuqei = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqei = (86400000 - __waktuqei)
                                                  let waktuqei = clockString(_waktuqei)
                                                  if (aquaqei == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqei == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqei = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqei = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqei = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqei = (_healingqei * 1)
                                                  let expqei = (_expqei * 1)
                                                  let moneyqei = (_moneyqei * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqei
                                                  global.db.data.users[m.sender].exp += expqei
                                                  global.db.data.users[m.sender].money += moneyqei
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjatujuh -= 2
                                                  global.db.data.users[m.sender].kerjadelapan += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqei = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqei} Money\n+${expqei} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqei} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqei, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqei} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 7 coba absen terlebih dahulu`)
                            //break
                            //case '9':
                            else if (global.db.data.users[m.sender].kerjadelapan > 1) {
                                              // let meqeo = m.sender.replace(/@.+/, '')
                                                  let aquaqeo = global.db.data.users[m.sender].aqua 
                                                  let healthqeo = global.db.data.users[m.sender].health
                                                  let __waktuqeo = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeo = (86400000 - __waktuqeo)
                                                  let waktuqeo = clockString(_waktuqeo)
                                                  if (aquaqeo == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeo == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqeo = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeo = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeo = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeo = (_healingqeo * 1)
                                                  let expqeo = (_expqeo * 1)
                                                  let moneyqeo = (_moneyqeo * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeo
                                                  global.db.data.users[m.sender].exp += expqeo
                                                  global.db.data.users[m.sender].money += moneyqeo
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjadelapan -= 2
                                                  global.db.data.users[m.sender].kerjasembilan += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeo = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeo} Money\n+${expqeo} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeo} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeo, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeo} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 8 coba absen terlebih dahulu`)
                            //break
                            //case '10':
                            else if (global.db.data.users[m.sender].kerjasembilan > 1) {
                                              // let meqep = m.sender.replace(/@.+/, '')
                                                  let aquaqep = global.db.data.users[m.sender].aqua 
                                                  let healthqep = global.db.data.users[m.sender].health
                                                  let __waktuqep = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqep = (86400000 - __waktuqep)
                                                  let waktuqep = clockString(_waktuqep)
                                                  if (aquaqep == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqep == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqep = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqep = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqep = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqep = (_healingqep * 1)
                                                  let expqep = (_expqep * 1)
                                                  let moneyqep = (_moneyqep * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqep
                                                  global.db.data.users[m.sender].exp += expqep
                                                  global.db.data.users[m.sender].money += moneyqep
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasembilan -= 2
                                                  global.db.data.users[m.sender].kerjasepuluh += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqep = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqep} Money\n+${expqep} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqep} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqep, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqep} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 9 coba absen terlebih dahulu`)
                            //break
                            //case '11':
                            else if (global.db.data.users[m.sender].kerjasepuluh > 1) {
                                              // let meqea = m.sender.replace(/@.+/, '')
                                                  let aquaqea = global.db.data.users[m.sender].aqua 
                                                  let healthqea = global.db.data.users[m.sender].health
                                                  let __waktuqea = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqea = (86400000 - __waktuqea)
                                                  let waktuqea = clockString(_waktuqea)
                                                  if (aquaqea == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqea == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqea = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqea = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqea = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqea = (_healingqea * 1)
                                                  let expqea = (_expqea * 1)
                                                  let moneyqea = (_moneyqea * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqea
                                                  global.db.data.users[m.sender].exp += expqea
                                                  global.db.data.users[m.sender].money += moneyqea
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasepuluh -= 2
                                                  global.db.data.users[m.sender].kerjasebelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqea = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqea} Money\n+${expqea} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqea} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqea, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqea} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 10 coba absen terlebih dahulu`)
                            //break
                            //case '12':
                            else if (global.db.data.users[m.sender].kerjasebelas > 1) {
                                              // let meqes = m.sender.replace(/@.+/, '')
                                                  let aquaqes = global.db.data.users[m.sender].aqua 
                                                  let healthqes = global.db.data.users[m.sender].health
                                                  let __waktuqes = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqes = (86400000 - __waktuqes)
                                                  let waktuqes = clockString(_waktuqes)
                                                  if (aquaqes == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqes == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqes = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqes = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqes = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqes = (_healingqes * 1)
                                                  let expqes = (_expqes * 1)
                                                  let moneyqes = (_moneyqes * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqes
                                                  global.db.data.users[m.sender].exp += expqes
                                                  global.db.data.users[m.sender].money += moneyqes
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasebelas -= 2
                                                  global.db.data.users[m.sender].kerjaduabelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqes = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqes} Money\n+${expqes} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqes} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqes, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqes} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 11 coba absen terlebih dahulu`)
                            //break
                            //case '13':
                            else if (global.db.data.users[m.sender].kerjaduabelas > 1) {
                                              // let meqed = m.sender.replace(/@.+/, '')
                                                  let aquaqed = global.db.data.users[m.sender].aqua 
                                                  let healthqed = global.db.data.users[m.sender].health
                                                  let __waktuqed = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqed = (86400000 - __waktuqed)
                                                  let waktuqed = clockString(_waktuqed)
                                                  if (aquaqed == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqed == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqed = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqed = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqed = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqed = (_healingqed * 1)
                                                  let expqed = (_expqed * 1)
                                                  let moneyqed = (_moneyqed * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqed
                                                  global.db.data.users[m.sender].exp += expqed
                                                  global.db.data.users[m.sender].money += moneyqed
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduabelas -= 2
                                                  global.db.data.users[m.sender].kerjatigabelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqed = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqed} Money\n+${expqed} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqed} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqed, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqed} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 12 coba absen terlebih dahulu`)
                            //break
                            //case '14':
                             else if (global.db.data.users[m.sender].kerjatigabelas > 1) {
                                              // let meqef = m.sender.replace(/@.+/, '')
                                                  let aquaqef = global.db.data.users[m.sender].aqua 
                                                  let healthqef = global.db.data.users[m.sender].health
                                                  let __waktuqef = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqef = (86400000 - __waktuqef)
                                                  let waktuqef = clockString(_waktuqef)
                                                  if (aquaqef == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqef == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqef = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqef = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqef = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqef = (_healingqef * 1)
                                                  let expqef = (_expqef * 1)
                                                  let moneyqef = (_moneyqef * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqef
                                                  global.db.data.users[m.sender].exp += expqef
                                                  global.db.data.users[m.sender].money += moneyqef
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjatigabelas -= 2
                                                  global.db.data.users[m.sender].kerjaempatbelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqef = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqef} Money\n+${expqef} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqef} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqef, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqef} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 13 coba absen terlebih dahulu`)
                            //break
                            //case '15':
                            else if (global.db.data.users[m.sender].kerjaempatbelas > 1) {
                                              // let meqeg = m.sender.replace(/@.+/, '')
                                                  let aquaqeg = global.db.data.users[m.sender].aqua 
                                                  let healthqeg = global.db.data.users[m.sender].health
                                                  let __waktuqeg = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeg = (86400000 - __waktuqeg)
                                                  let waktuqeg = clockString(_waktuqeg)
                                                  if (aquaqeg == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeg == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqeg = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeg = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeg = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeg = (_healingqeg * 1)
                                                  let expqeg = (_expqeg * 1)
                                                  let moneyqeg = (_moneyqeg * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeg
                                                  global.db.data.users[m.sender].exp += expqeg
                                                  global.db.data.users[m.sender].money += moneyqeg
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaempatbelas -= 2
                                                  global.db.data.users[m.sender].kerjalimabelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeg = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeg} Money\n+${expqeg} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeg} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeg, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeg} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 14 coba absen terlebih dahulu`)
                            //break
                            //case '16':
                            else if (global.db.data.users[m.sender].kerjalimabelas > 1) {
                                              // let meqeh = m.sender.replace(/@.+/, '')
                                                  let aquaqeh = global.db.data.users[m.sender].aqua 
                                                  let healthqeh = global.db.data.users[m.sender].health
                                                  let __waktuqeh = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeh = (86400000 - __waktuqeh)
                                                  let waktuqeh = clockString(_waktuqeh)
                                                  if (aquaqeh == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeh == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqeh = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeh = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeh = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeh = (_healingqeh * 1)
                                                  let expqeh = (_expqeh * 1)
                                                  let moneyqeh = (_moneyqeh * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeh
                                                  global.db.data.users[m.sender].exp += expqeh
                                                  global.db.data.users[m.sender].money += moneyqeh
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjalimabelas -= 2
                                                  global.db.data.users[m.sender].kerjaenambelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeh = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeh} Money\n+${expqeh} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeh} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeh, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeh} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 15 coba absen terlebih dahulu`)
                            //break
                            //case '17':
                            else if (global.db.data.users[m.sender].kerjaenambelas > 1) {
                                              // let meqej = m.sender.replace(/@.+/, '')
                                                  let aquaqej = global.db.data.users[m.sender].aqua 
                                                  let healthqej = global.db.data.users[m.sender].health
                                                  let __waktuqej = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqej = (86400000 - __waktuqej)
                                                  let waktuqej = clockString(_waktuqej)
                                                  if (aquaqej == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqej == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqej = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqej = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqej = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqej = (_healingqej * 1)
                                                  let expqej = (_expqej * 1)
                                                  let moneyqej = (_moneyqej * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqej
                                                  global.db.data.users[m.sender].exp += expqej
                                                  global.db.data.users[m.sender].money += moneyqej
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaenambelas -= 2
                                                  global.db.data.users[m.sender].kerjatujuhbelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqej = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqej} Money\n+${expqej} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqej} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqej, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqej} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 16 coba absen terlebih dahulu`)
                            //break
                            //case '18':
                            else if (global.db.data.users[m.sender].kerjatujuhbelas > 1) {
                                              // let meqek = m.sender.replace(/@.+/, '')
                                                  let aquaqek = global.db.data.users[m.sender].aqua 
                                                  let healthqek = global.db.data.users[m.sender].health
                                                  let __waktuqek = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqek = (86400000 - __waktuqek)
                                                  let waktuqek = clockString(_waktuqek)
                                                  if (aquaqek == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqek == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqek = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqek = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqek = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqek = (_healingqek * 1)
                                                  let expqek = (_expqek * 1)
                                                  let moneyqek = (_moneyqek * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqek
                                                  global.db.data.users[m.sender].exp += expqek
                                                  global.db.data.users[m.sender].money += moneyqek
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjatujuhbelas -= 2
                                                  global.db.data.users[m.sender].kerjadelapanbelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqek = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqek} Money\n+${expqek} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqek} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqek, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqek} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 17 coba absen terlebih dahulu`)
                            //break
                            //case '19':
                            else if (global.db.data.users[m.sender].kerjadelapanbelas > 1) {
                                              // let meqel = m.sender.replace(/@.+/, '')
                                                  let aquaqel = global.db.data.users[m.sender].aqua 
                                                  let healthqel = global.db.data.users[m.sender].health
                                                  let __waktuqel = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqel = (86400000 - __waktuqel)
                                                  let waktuqel = clockString(_waktuqel)
                                                  if (aquaqel == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqel == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqel = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqel = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqel = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqel = (_healingqel * 1)
                                                  let expqel = (_expqel * 1)
                                                  let moneyqel = (_moneyqel * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqel
                                                  global.db.data.users[m.sender].exp += expqel
                                                  global.db.data.users[m.sender].money += moneyqel
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjadelapanbelas -= 2
                                                  global.db.data.users[m.sender].kerjasembilanbelas += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqel = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqel} Money\n+${expqel} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqel} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqel, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqel} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 18 coba absen terlebih dahulu`)
                            //break
                            //case '20':
                            else if (global.db.data.users[m.sender].kerjasembilanbelas > 1) {
                                              // let meqefh = m.sender.replace(/@.+/, '')
                                                  let aquaqefh = global.db.data.users[m.sender].aqua 
                                                  let healthqefh = global.db.data.users[m.sender].health
                                                  let __waktuqefh = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqefh = (86400000 - __waktuqefh)
                                                  let waktuqefh = clockString(_waktuqefh)
                                                  if (aquaqefh == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqefh == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqefh = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqefh = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqefh = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqefh = (_healingqefh * 1)
                                                  let expqefh = (_expqefh * 1)
                                                  let moneyqefh = (_moneyqefh * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqefh
                                                  global.db.data.users[m.sender].exp += expqefh
                                                  global.db.data.users[m.sender].money += moneyqefh
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasembilanbelas -= 2
                                                  global.db.data.users[m.sender].kerjaduapuluh += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqefh = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqefh} Money\n+${expqefh} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqefh} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqefh, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqefh} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 19 coba absen terlebih dahulu`)
                            //break
                            //case '21':
                            else if (global.db.data.users[m.sender].kerjaduapuluh > 1) {
                                              // let meqez = m.sender.replace(/@.+/, '')
                                                  let aquaqez = global.db.data.users[m.sender].aqua 
                                                  let healthqez = global.db.data.users[m.sender].health
                                                  let __waktuqez = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqez = (86400000 - __waktuqez)
                                                  let waktuqez = clockString(_waktuqez)
                                                  if (aquaqez == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqez == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqez = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqez = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqez = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqez = (_healingqez * 1)
                                                  let expqez = (_expqez * 1)
                                                  let moneyqez = (_moneyqez * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqez
                                                  global.db.data.users[m.sender].exp += expqez
                                                  global.db.data.users[m.sender].money += moneyqez
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduapuluh -= 2
                                                  global.db.data.users[m.sender].kerjaduasatu += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqez = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqez} Money\n+${expqez} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqez} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqez, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqez} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 20 coba absen terlebih dahulu`)
                            //break
                            //case '22':
                            else if (global.db.data.users[m.sender].kerjaduasatu > 1) {
                                              // let meqex = m.sender.replace(/@.+/, '')
                                                  let aquaqex = global.db.data.users[m.sender].aqua 
                                                  let healthqex = global.db.data.users[m.sender].health
                                                  let __waktuqex = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqex = (86400000 - __waktuqex)
                                                  let waktuqex = clockString(_waktuqex)
                                                  if (aquaqex == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqex == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                 
                                                  
                                                  let _healingqex = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqex = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqex = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqex = (_healingqex * 1)
                                                  let expqex = (_expqex * 1)
                                                  let moneyqex = (_moneyqex * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqex
                                                  global.db.data.users[m.sender].exp += expqex
                                                  global.db.data.users[m.sender].money += moneyqex
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduasatu -= 2
                                                  global.db.data.users[m.sender].kerjaduadua += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqex = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqex} Money\n+${expqex} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqex} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqex, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqex} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 21 coba absen terlebih dahulu`)
                            //break
                            //case '23':
                            else if (global.db.data.users[m.sender].kerjaduadua > 1) {
                                              // let meqec = m.sender.replace(/@.+/, '')
                                                  let aquaqec = global.db.data.users[m.sender].aqua 
                                                  let healthqec = global.db.data.users[m.sender].health
                                                  let __waktuqec = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqec = (86400000 - __waktuqec)
                                                  let waktuqec = clockString(_waktuqec)
                                                  if (aquaqec == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqec == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqec = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqec = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqec = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqec = (_healingqec * 1)
                                                  let expqec = (_expqec * 1)
                                                  let moneyqec = (_moneyqec * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqec
                                                  global.db.data.users[m.sender].exp += expqec
                                                  global.db.data.users[m.sender].money += moneyqec
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduadua -= 2
                                                  global.db.data.users[m.sender].kerjaduatiga += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqec = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqec} Money\n+${expqec} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqec} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqec, m)
                                                  
                                                 
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqec} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 22 coba absen terlebih dahulu`)
                            //break
                            //case '24':
                            else if (global.db.data.users[m.sender].kerjaduatiga > 1) {
                                              // let meqev = m.sender.replace(/@.+/, '')
                                                  let aquaqev = global.db.data.users[m.sender].aqua 
                                                  let healthqev = global.db.data.users[m.sender].health
                                                  let __waktuqev = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqev = (86400000 - __waktuqev)
                                                  let waktuqev = clockString(_waktuqev)
                                                  if (aquaqev == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqev == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqev = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqev = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqev = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqev = (_healingqev * 1)
                                                  let expqev = (_expqev * 1)
                                                  let moneyqev = (_moneyqev * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqev
                                                  global.db.data.users[m.sender].exp += expqev
                                                  global.db.data.users[m.sender].money += moneyqev
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduatiga -= 2
                                                  global.db.data.users[m.sender].kerjaduaempat += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqev = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqev} Money\n+${expqev} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqev} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqev, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqev} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 23 coba absen terlebih dahulu`)
                            //break
                            //case '25':
                            else if (global.db.data.users[m.sender].kerjaduaempat > 1) {
                                              // let meqeb = m.sender.replace(/@.+/, '')
                                                  let aquaqeb = global.db.data.users[m.sender].aqua 
                                                  let healthqeb = global.db.data.users[m.sender].health
                                                  let __waktuqeb = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeb = (86400000 - __waktuqeb)
                                                  let waktuqeb = clockString(_waktuqeb)
                                                  if (aquaqeb == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeb == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqeb = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeb = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeb = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeb = (_healingqeb * 1)
                                                  let expqeb = (_expqeb * 1)
                                                  let moneyqeb = (_moneyqeb * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeb
                                                  global.db.data.users[m.sender].exp += expqeb
                                                  global.db.data.users[m.sender].money += moneyqeb
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduaempat -= 2
                                                  global.db.data.users[m.sender].kerjadualima+= 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeb = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeb} Money\n+${expqeb} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeb} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeb, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeb} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 24 coba absen terlebih dahulu`)
                            //break
                            //case '26':
                            else if (global.db.data.users[m.sender].kerjadualima > 1) {
                                              // let meqen = m.sender.replace(/@.+/, '')
                                                  let aquaqen = global.db.data.users[m.sender].aqua 
                                                  let healthqen = global.db.data.users[m.sender].health
                                                  let __waktuqen = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqen = (86400000 - __waktuqen)
                                                  let waktuqen = clockString(_waktuqen)
                                                  if (aquaqen == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqen == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqen = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqen = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqen = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqen = (_healingqen * 1)
                                                  let expqen = (_expqen * 1)
                                                  let moneyqen = (_moneyqen * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqen
                                                  global.db.data.users[m.sender].exp += expqen
                                                  global.db.data.users[m.sender].money += moneyqen
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjadualima -= 2
                                                  global.db.data.users[m.sender].kerjaduaenam += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqen = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqen} Money\n+${expqen} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqen} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqen, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqen} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 25 coba absen terlebih dahulu`)
                            //break
                            //case '27':
                            else if (global.db.data.users[m.sender].kerjaduaenam > 1) {
                                              // let meqem = m.sender.replace(/@.+/, '')
                                                  let aquaqem = global.db.data.users[m.sender].aqua 
                                                  let healthqem = global.db.data.users[m.sender].health
                                                  let __waktuqem = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqem = (86400000 - __waktuqem)
                                                  let waktuqem = clockString(_waktuqem)
                                                  if (aquaqem == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqem == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqem = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqem = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqem = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqem = (_healingqem * 1)
                                                  let expqem = (_expqem * 1)
                                                  let moneyqem = (_moneyqem * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqem
                                                  global.db.data.users[m.sender].exp += expqem
                                                  global.db.data.users[m.sender].money += moneyqem
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduaenam -= 2
                                                  global.db.data.users[m.sender].kerjaduatujuh += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqem = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqem} Money\n+${expqem} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqem} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqem, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqem} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 26 coba absen terlebih dahulu`)
                            //break
                            //case '28':
                            else if (global.db.data.users[m.sender].kerjaduatujuh > 1) {
                                              // let meqse = m.sender.replace(/@.+/, '')
                                                  let aquaqse = global.db.data.users[m.sender].aqua 
                                                  let healthqse = global.db.data.users[m.sender].health
                                                  let __waktuqse = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqse = (86400000 - __waktuqse)
                                                  let waktuqse = clockString(_waktuqse)
                                                  if (aquaqse == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqse == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqse = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqse = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqse = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqse = (_healingqse * 1)
                                                  let expqse = (_expqse * 1)
                                                  let moneyqse = (_moneyqse * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqse
                                                  global.db.data.users[m.sender].exp += expqse
                                                  global.db.data.users[m.sender].money += moneyqse
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduatujuh -= 2
                                                  global.db.data.users[m.sender].kerjaduadelapan += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqse = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqse} Money\n+${expqse} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqse} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqse, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqse} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 27 coba absen terlebih dahulu`)
                            //break
                            //case '29':
                            else if (global.db.data.users[m.sender].kerjaduadelapan > 1) {
                                              // let meqsu = m.sender.replace(/@.+/, '')
                                                  let aquaqsu = global.db.data.users[m.sender].aqua 
                                                  let healthqsu = global.db.data.users[m.sender].health
                                                  let __waktuqsu = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqsu = (86400000 - __waktuqsu)
                                                  let waktuqsu = clockString(_waktuqsu)
                                                  if (aquaqsu == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqsu == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqsu = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqsu = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqsu = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqsu = (_healingqsu * 1)
                                                  let expqsu = (_expqsu * 1)
                                                  let moneyqsu = (_moneyqsu * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqsu
                                                  global.db.data.users[m.sender].exp += expqsu
                                                  global.db.data.users[m.sender].money += moneyqsu
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduadelapan -= 2
                                                  global.db.data.users[m.sender].kerjaduasembilan += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqsu = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqsu} Money\n+${expqsu} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqsu} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqsu, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqsu} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 28 coba absen terlebih dahulu`)
                            //break
                            //case '30':
                            else if (global.db.data.users[m.sender].kerjaduasembilan > 1) {
                                              // let meqso = m.sender.replace(/@.+/, '')
                                                  let aquaqso = global.db.data.users[m.sender].aqua 
                                                  let healthqso = global.db.data.users[m.sender].health
                                                  let __waktuqso = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqso = (86400000 - __waktuqso)
                                                  let waktuqso = clockString(_waktuqso)
                                                  if (aquaqso == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqso == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  
                                                  let _healingqso = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqso = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  let _moneyqso = `${Math.floor(Math.random() * 1000000)}`.trim()
                                                  
                                                  let healingqso = (_healingqso * 1)
                                                  let expqso = (_expqso * 1)
                                                  let moneyqso = (_moneyqso * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqso
                                                  global.db.data.users[m.sender].exp += expqso
                                                  global.db.data.users[m.sender].money += moneyqso
                                                  global.db.data.users[m.sender].cupon += 2
                                                  global.db.data.users[m.sender].tiketcoin += 5
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjaduasembilan -= 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqso = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqso} Money\n+${expqso} Exp\n+2 Cupon\n+5 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqso} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqso, m)
                                                  
                                                  
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqso} untuk bisa absen lagi..`)
                              } //else m.reply(`Kamu tidak absen hari ke 29 coba absen terlebih dahulu`)
                            //break
                              else {
                                              // let meqeq = m.sender.replace(/@.+/, '')
                                                  let aquaqeq = global.db.data.users[m.sender].aqua 
                                                  let healthqeq = global.db.data.users[m.sender].health
                                                  let __waktuqeq = (new Date - global.db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeq = (86400000 - __waktuqeq)
                                                  let waktuqeq = clockString(_waktuqeq)
                                                  if (aquaqeq == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeq == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - global.db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (global.db.data.users[m.sender].health > 89) {
                                                  if (global.db.data.users[m.sender].aqua > 4) {
                                                  
                                                  let _healingqeq = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeq = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeq = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeq = (_healingqeq * 1)
                                                  let expqeq = (_expqeq * 1)
                                                  let moneyqeq = (_moneyqeq * 1)
                                                  
                                                  global.db.data.users[m.sender].health -= healingqeq
                                                  global.db.data.users[m.sender].exp += expqeq
                                                  global.db.data.users[m.sender].money += moneyqeq
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].aqua -= 5
                                                  global.db.data.users[m.sender].kerjasatu += 2
                                                  global.db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeq = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeq} Money\n+${expqeq} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeq} health\n-5 Aqua\n\nJangan lupa untuk absen besok ya :)`.trim()
                                                  conn.reply(m.chat, chatqeq, m)
                                                  
                                                  } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                             } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                        } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeq} untuk bisa absen lagi besok..`)
                                   }
                  /*default:
                         return conn.reply(m.chat, `${usedPrefix + command} [1/30]\nContoh penggunaan: *${usedPrefix + command} 1*`, m)
                    }*/


}

handler.help = ['bekerja']
handler.tags = ['rpg']
handler.command = /^(bekerja)$/i

handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
