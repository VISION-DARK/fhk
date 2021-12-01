let handler = async m => m.reply(`

╭─「 Donasi • Saldo e wallet ovo & dana 」
│ • 0895618376962
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
