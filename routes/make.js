const queryString = `INSERT INTO links (address) VALUES (?)`;

module.exports = (req, res) => {

    connection.query(queryString, [req.body.url], function (error, results) {
        if (error) {
            res.status(500).end();
            throw error;
        } else {
            let fullLink = 
                req.protocol + "://" + 
                req.hostname + 
                (process.env.PORT ? "" : ":3000") + "/s/" + 
                results.insertId.toString();

            res.status(201).send(fullLink);
        }
    });

};