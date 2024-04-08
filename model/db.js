const sequelize = require('sequelize');

let db;


if (process.env.DATABASE_URL) {

  db = new sequelize(process.env.DATABASE_URL)

} else {

  db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/users.db'
  });

}

const Posts = db.define('Posts', {
  userId: {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  postData: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  }
})


db.sync()

module.exports = {
  db, Posts
}