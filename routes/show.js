const moment = require('moment');

const currentDate = moment().format("YYYY-MM-DD");
const queryString = `INSERT INTO visits (link_id, date) VALUES (?, ?)`;

module.exports = (req, res) => {

    connection.query(queryString, [req.params.id, currentDate], function (error) {
        if (error) {
            res.status(500).end();
            throw error;
        } else {
            res.status(200).redirect(req.params.link);
            return;
        }

    });

};