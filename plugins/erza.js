let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/erza?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'erza.jpg', `© iRexus`, m)
}
handler.help = ['iRexus']
handler.tags = ['random']
handler.command = /^(iRexus)$/i
handler.limit = true

module.exports = handler
