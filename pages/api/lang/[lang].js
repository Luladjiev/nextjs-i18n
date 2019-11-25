module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    switch (req.query.lang) {
        case 'de':
            return res.end(JSON.stringify({ 'hello': 'Hallo' }));
        case 'en':
        default:
            console.log('asd');
            return res.end(JSON.stringify({ 'hello': 'Hello world' }));
    }
}