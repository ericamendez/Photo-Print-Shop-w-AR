const Gallery = require('../models/Gallery');
const User = require('../models/User');

exports.getSearch = (req, res) => {
    User.find((err, artists) => {
    // console.log(artists)
    res.render('search.ejs', {
        user: artists,
        title: 'Search Artist'
    });
    });
};

exports.getArtist = (req, res) => {
    User.findById(req.query.userId, (err, artist) => {
    // User.find({_id: req.query.userId}, (err, artist) => {
        Gallery.find({ email: artist.email}, (err, existingPhoto) => {
            res.render('artist.ejs', {
                photos: existingPhoto,
                user: artist,
                title: 'Artist Page'
            });
        });
    })
};

exports.getPhoto = (req, res) => {
    Gallery.findById(req.query.photoId, (err, reqPhoto) => {
        User.find({ email: reqPhoto.email}, (err, artist) => {
            
            res.render('photo.ejs', {
                user: artist,
                photo: reqPhoto,
                title: 'Photo Page'
            });
        });
    })
};

exports.getAr = (req, res) => {
    Gallery.findById(req.query.photoId, (err, reqPhoto) => {
        console.log(reqPhoto.photo)
        res.render('ar.ejs', {
            photo: reqPhoto,
            title: 'Augmented Reality'
        });
    })
};

