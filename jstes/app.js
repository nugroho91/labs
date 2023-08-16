const express = require('express');
const app = express();

// Konfigurasi middleware dan rute di sini

const port = 3000;
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
