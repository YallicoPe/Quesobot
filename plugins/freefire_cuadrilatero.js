let handler = async (m, {conn, command}) => {
  let url = Cuadrilatero [Math.floor(Math.random() * Cuadrilatero .length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 *CUADRILÁTERO*`.trim(), m)
};
handler.help = ["Cuadrilatero "];
handler.tags = ["internet"];
handler.command = /^(Cuadrilatero )$/i;
export default handler;

global.Cuadrilatero  = [
  "https://qu.ax/BZfp.jpeg`",
];

handler.limit = 1;
