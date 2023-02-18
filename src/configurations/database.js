const mongoose = require("mongoose");
const constants = require("..//mongoose");

function database() {
console.log("connecting to mongodb...");
console.log(process.env.DATABASE_URI);
mongoose
.set(strictQuery, true)
.connect(process.env.DATABASE_URI, {})
.then(() => {
    console.log("Yes, mongodb is connected.");
})
.catch((error) => {
    console.log(error)
});
}

module.exports = database;