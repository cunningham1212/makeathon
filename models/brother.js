var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var BrotherSchema = new mongoose.Schema({
    username: String,
    password: String,
    fname: String,
    lname: String,
    nickname: String,
    email: String,
    isExec: Boolean,
    isAlumni: Boolean,
    isPledge: Boolean,
    active: Number
});

BrotherSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Brother", BrotherSchema);

/*

"username": "cypher",
    "fname": "John",
    "lname": "Cunningham",
    "nickname": "Cypher",
    "email": "cunningjc10@gmail.com",
    "isExec": false,
    "isAlumni": false,
    "isActive": false,
    "isPledge": true,
*/