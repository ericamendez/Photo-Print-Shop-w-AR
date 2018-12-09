const Gallery = require('../models/Gallery');

exports.getSearch = (req, res) => {
    
    res.render('search.ejs', {
        title: 'Search Artist'
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

