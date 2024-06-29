let handler = async (m, {conn, command}) => {
  let url = Exagonal[Math.floor(Math.random() * Exagonal.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 *EXAGONAL*`.trim(), m)
};
handler.help = ["Exagonal"];
handler.tags = ["internet"];
handler.command = /^(Exagonal)$/i;
export default handler;

global.Exagonal = [
  "https://qu.ax/BZfp.jpeg`",
];

handler.limit = 1;
