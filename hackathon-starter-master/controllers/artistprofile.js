const Gallery = require('../models/Gallery');
const User = require('../models/User');

exports.getSearch = (req, res) => {
    User.find((err, artists) => {
    console.log(artists)
    res.render('search.ejs', {
        user: artists,
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

