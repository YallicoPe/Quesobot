let handler = async (m, {conn, command}) => {
  let url = Kalahary[Math.floor(Math.random() * Kalahary.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 *KALAHARY*`.trim(), m)
};
handler.help = ["Kalahary"];
handler.tags = ["internet"];
handler.command = /^(Kalahary)$/i;
export default handler;

global.Kalahary = [
  "https://qu.ax/LEag.jpeg`",
];

handler.limit = 1;
