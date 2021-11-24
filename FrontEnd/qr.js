const fs = require("fs");
const qrcode = require("qrcode");

const urlCv = "https://drive.google.com/open?id=1iGHAD2BrYAda-IpPgz8IQbE5aByaD4PI";

const run = async() => {
  const QR = await qrcode.toDataURL(urlCv)
  const htmlContent =  `
  <div style="display: flex; justify-content: center; align-items: center;">
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync('./QR.vue', htmlContent)
}

run()