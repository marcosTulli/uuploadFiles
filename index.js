const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/download', (req, res) => {
  res.download('./public/tuki.jpg', 'foo.jpg');
});

app.get('/api/sendfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tuki.jpg'));
});

app.get('/api/attachment', (req, res) => {
  res.attachment('./public/tuki.jpg');
});

// app.use(fileUpload());

// app.post('/api/single-file', (req, res) => {
//   const f = req.files.myfile;
//   res.set('Content-Type', 'text/htlm');
//   f.mv(`./uploads/${f.name}`);
//   res.send(`
//      <table>
//       <tr>
//         <td>Name</td>
//         <td>${f.name}</td>
//       </tr>
//       <tr>
//         <td>Size</td>
//         <td>${f.size}</td>
//       </tr>
//       <tr>
//         <td>MIME</td>
//         <td>${f.mimetype}</td>
//       </tr>
//     </table>
//  `);
// });

// app.post('/api/multi-file', (req, res) => {
//   res.set('Content-Type', 'text/html');
//   let response = '<table>';
//   for (const f of req.files.myfiles) {
//     f.mv(`./uploads/${f.name}`);
//     response += `
//         <td>${f.name}</td>
//         <td>${f.size}</td>
//         <td>${f.mimetype}</td>
//         `;
//   }
//   response += `</table>`;
//   res.send(response);
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
