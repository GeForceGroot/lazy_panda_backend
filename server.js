const express = require('express')
const { db } = require('./model/db')
const { postRoute } = require('./routes/posts')
const core = require('cors')
const app = express();
const port = process.env.PORT || 5050

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(core())

app.use('/api/createPost', postRoute)

app.use('/', postRoute)


db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log('server is runnig on http://localhost:5050')
    })
  })
  .catch((error) => {
    console.log(error);
  })

