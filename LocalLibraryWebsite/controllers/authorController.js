var Author = require("../models/author")

// Display list of all Authors

exports.author_list = function (req, res) {
    res.send("NOT IMPLEMENTED: Author list")
}

// Display specific detail for an author

exports.author_detail = function (req, res) {
    res.send("NOT IMPLEMENTED: Author detail" + req.params.id)
}

// Handler POST

 exports.author_create_post = function(req, res) {
     res.send("NOT IMPLEMENTED: Author create post")
 }

 // Display update form GET

 exoprts.author_update_get = function(req, res) {
     res.send("NOT IMPLEMENTED: Author update GET")
 }

 // Handle update on POST

 exports.author_update_post = function(req, res) {
     res.send("NOT IMPLEMENTED; Author update POST")
 }