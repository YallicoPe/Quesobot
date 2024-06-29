let handler = async (m, {conn, command}) => {
  let url = Bermuda[Math.floor(Math.random() * Bermuda.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 *BERMUDA*`.trim(), m)
};
handler.help = ["Bermuda"];
handler.tags = ["internet"];
handler.command = /^(Bermuda)$/i;
export default handler;

global.Bermuda = [
  "https://qu.ax/ZnYx.jpeg`",
];

handler.limit = 1;
