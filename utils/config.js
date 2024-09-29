module.exports = {
  //数据库配置
  dbConfig:{
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'crowdfunding_db',
  },
  msg:{
    sucess: function (data, message = '') {
      return {
        code: 200,
        message,
        data
      }
    },
    error: function (message = '') {
      return {
        code: 600,
        message,
        data:{}
      }
    }
  },
  info: {
    sucess: function (data) {
      return {
        state: true,
        data
      }
    },
    error: function () {
      return {
        state: false
      }
    }
  }
}