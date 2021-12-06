const fs = require("fs");
const qrcode = require("qrcode");

const urlCv = "https://projecttics3.z21.web.core.windows.net/tienda";

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