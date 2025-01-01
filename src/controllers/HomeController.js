const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const getEngPage = (req, res) => {
    res.render('sample')
}

module.exports ={ getHomePage , getEngPage};
