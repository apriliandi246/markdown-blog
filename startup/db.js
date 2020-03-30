const mongoose = require('mongoose');

module.exports = function () {
      mongoose.connect("mongodb://localhost/project_3", {
                  useFindAndModify: true,
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                  useCreateIndex: true
            })
            .then(() => console.log("Connect to MongoDB..."))
            .catch(err => console.log("Something wromg", err));
}