const express = require("express");
const cors = require('cors');
const app = express();
//路径模块
const path = require('path')
//跨域模块
app.use(cors())
//传参json格式化
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//配置页面
app.use(express.static(path.join(__dirname, 'public')))
const { msg } = require('./utils/config')
const {
	getData
} = require("./query/data")


//获取活动数据
app.get('/getActiveData', async function (req, res) {
	getData('select * from fundraiser where active=0',function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})


//获取搜索数据
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

//获取分类数据
app.get('/categoryList', async function (req, res) {
	getData('select * from category',function (err, data) {
		res.send(msg.sucess(data, 'success'))
	})
})


//启动入口 5558为端口号
app.listen((5558), function () {
  console.log(`express-api running on port 5558`);
  console.log(`http://localhost:5558/index.html`);
});

