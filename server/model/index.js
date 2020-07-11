const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true })
  .then(function () {
    console.log('mongodb connected');
  })
  .catch(function () {
    console.log('Error :');
  });

module.exports = mongoose;
