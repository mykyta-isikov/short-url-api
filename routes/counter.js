const queryString = `SELECT date FROM visits WHERE link_id=?`;

module.exports = (req, res) => {

    connection.query(queryString, [req.params.id], function (error, results) {
        if (error) {
            res.status(500).end();
            throw error;
        } else if (results[0]) {
            let formattedOutput = results.map((elem) => {
                return elem.date;
            });
            res.status(200).send(formattedOutput);
        } else {
            res.status(200).end();
        }
    });

};