const Gallery = require('../models/Gallery');
const User = require('../models/User');

exports.getSearch = (req, res) => {
    Gallery.find({ }, (err, existingPhoto) => {
    console.log(existingPhoto)
    res.render('search.ejs', {
        title: 'Search Artist'
    });
    });
};

exports.getArtist = (req, res) => {
    
    res.render('artist.ejs', {
        title: 'Artist Page'
    });
};

exports.getPhoto = (req, res) => {
    
    res.render('photo.ejs', {
        title: 'Photo Page'
    });
};

exports.getAr = (req, res) => {
   
    res.render('ar.ejs', {
        title: 'Augmented Reality'
    });
};

