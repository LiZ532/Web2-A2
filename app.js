const express = require("express");
const cors = require('cors');
const app = express();
//path module
const path = require('path')
//Cross domain module
app.use(cors())
//Format parameter 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Configuration page
app.use(express.static(path.join(__dirname, 'public')))
const { msg } = require('./utils/config')
const {
	getData
} = require("./query/data")


//Obtain activity data
app.get('/getActiveData', async function (req, res) {
	getData('select * from fundraiser where active=0',function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})


//Retrieve search data
app.get('/search', async function (req, res) {
	let search= req.query
	var sql = 'select * from fundraiser where (active=1 or active=0) '
	if (search.title) {
		sql += `and caption like '%${search.title}%'`
	}
	if (search.categoryId) {
	    sql += `and category_id = ${search.categoryId}`
	}
	getData(sql,function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})

app.get('/about/:fundraiserId', async function (req, res) {
	const fundraiserId = parseInt(req.params.fundraiserId)
	getData("SELECT * from fundraiser fr inner join category ca on fr.category_id = ca.category_id where fundraiser_id="+fundraiserId,function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})

//Obtain classification data
app.get('/categoryList', async function (req, res) {
	getData('select * from category',function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})


//Start entry 5558 with port number
app.listen((5558), function () {
  console.log(`express-api running on port 5558`);
  console.log(`http://localhost:5558/index.html`);
});


