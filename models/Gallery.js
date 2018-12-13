const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    userId: String,
    email: String,
    photo: String,
    caption: String,
    price: Number,
    keywords: String

}, {
    timestamps: true
});



gallerySchema.methods.gravatar = function gravatar(size) {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};


gallerySchema.methods.photoUpload = function photoUpload(size) {
    return "/uploads/" + `${this.photo}`;
};

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;