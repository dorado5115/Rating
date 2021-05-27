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
        pool.query('UPDATE rating SET rating = ? WHERE course = ?',
        [req.body.rating, req.body.course],
        
        function (error) {
            if (error) throw error;
        });
        res.status(200).send({
            status: 'sucessful'
        });
    }
}