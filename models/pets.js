const connection = require('../utils/database/connection');
const fileUpload = require('../utils/files/fileUpload');

class Pet {
  create(pet, res) {
    const sql = 'INSERT INTO Pets SET ?';

    fileUpload(pet.image, pet.name, (error, newPath) => {
      if (error) {
        return res.status(400).json({ error });
      }
      const newPet = { name: pet.name, image: newPath };

      connection.query(sql, newPet, (error) => {
        if (error) {
          return res.status(400).json({ error })
        }
        res.status(200).json(newPet);
      });
    });
  }
};

module.exports = new Pet();
