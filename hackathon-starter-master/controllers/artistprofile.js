// artist!!!

exports.getArtist = (req, res) => {
    // if (req.user) {
    //   return res.redirect('/');
    // }
    res.render('artist.ejs', {
        title: 'Artist'
    });
};

exports.getAr = (req, res) => {
    // if (req.user) {
    //   return res.redirect('/');
    // }
    res.render('ar.ejs', {
        title: 'Artist'
    });
};