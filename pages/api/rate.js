var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'form'
});

export default function rate(req, res){
    if (req.method == "POST"){
        pool.query('INSERT IGNORE INTO rating (course, rating) VALUES(?,?)',
        [req.body.course, req.body.rating, req.body.course],
        
        function (error) {
            if (error) throw error;
            res.status(200).send({
                status: 'sucessful'
            });
        });
    }
    else{
        var result;
        pool.query('SELECT * FROM rating', function (error, rows) {
            if (error) throw error;
            result = rows;
            res.status(200).send(result);
        });
    }
}
