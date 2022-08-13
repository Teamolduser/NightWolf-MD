let handler  = async (m, { conn, args }) => {
    let pp = `https://telegra.ph/file/46872e2e35123b7ed9151.png`
    
    let teks = `*🎉EVENT MENYAMBUT HUT RI Ke-77🎉*\n By-${await conn.user.name}

Nightwolf sedang mengadakan event untuk menyambut *HUT NKRI* yang *Ke-77*.
Maka dari itu, kami selaku management BOT akan mengadakan lomba yaitu *Raja Referal*.

Apa itu Raja Referal?
Raja Referal adalah yang dimana kalian diharuskan mendapatkan referal sebanyak mungkin untuk memenangkan lomba ini. Cara mendapatkannya
dengan mengetik */ref* maka akan muncul kode referal kalian. Setelah muncul kode referal kalian, bagikan kode tersebut kepada teman kalian. Jika sudah maka ketik */ref (kode referal kalian)*. Setelah itu akan direply BOT jika berhasil.
Jika kalian mendapatkan referal terbanyak maka akan medapatkan hadiah dari kami, Yaitu:

    🥇 Youtube Premium 2 bulan + 
          Premium BOT 1 bulan
    🥈 Youtube Premium 2 bulan + 
          Premium BOT 15 hari
    🥉 Youtube Premium 1 bulan + 
          Premium BOT seminggu
    🏅 Youtube Premium 1 bulan
    🏅 Youtube Premium 1 bulan
  
Lomba akan diumumkan pemenangnya pada tanggal 17 agustus 2022.
Maka dari itu berlomba lombalah dalam mendapatkan referal🥳.

*🎉Good Luck!!🎉*`.trim()
      //conn.sendFile(m.chat, pp, 'pp.png', teks, m)
      conn.sendButton(m.chat, teks, wm, pp, [[`REFERAL`, `.ref`],[`RULES`, `.rules`]], m)
   } 
  
   handler.help = ['event']
   handler.tags = ['info']
   handler.command = /^event$/i
   
   module.exports = handler