// artist!!!

exports.getArtist = (req, res) => {
    // if (req.user) {
    //   return res.redirect('/');
    // }
    res.render('artist.ejs', {
        title: 'Artist'
    });
};