const fs = require('fs');
const path = require('path');

module.exports = (filePath, fileName, callback) => {
  const imageTypes = ['jpg', 'png', 'jpeg'];
  const type = path.extname(filePath);
  const validateType = imageTypes.indexOf(type.substring(1)) !== -1;

  try {
    if (validateType) {
      const newPath = `./assets/imagens/${nomeDoArquivo}${tipo}`;

      return fs.createReadStream(filePath)
      .pipe(fs.createWriteStream(newPath))
      .on('finish', () => callback(false, newPath));
    }
  } catch (err) {
    const error = 'Tipo é inválido';
    callback(error);
    console.error(err);
  };
}