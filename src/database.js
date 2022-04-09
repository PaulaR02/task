const mongoose = require('mongoose');

const URI = 'mongodb+srv://pmontes10:paula2022@primeradb.6bc64.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;