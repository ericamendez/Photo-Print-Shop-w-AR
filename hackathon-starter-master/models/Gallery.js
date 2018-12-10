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

userSchema.methods.photo = function profilePhoto(size) {
    return "/uploads/" + `${this.photo}`;
};

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;