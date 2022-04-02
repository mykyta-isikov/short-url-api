const queryString = `SELECT address FROM links WHERE id=?`;

module.exports = (req, res, next) => {

    connection.query(queryString, [req.params.id], function (error, results) {
        if (error) {
            res.status(500).end();
            throw error;
        } else if (results[0]) {
            req.params.link = results[0].address;
            next();
        } else {
            res.status(404).end();
            return;
        }
    });
    
}