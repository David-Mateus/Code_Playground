const express = require('express')
const app = express()
const connectDatabase = require('./database/db')

const routes = require('./routes')

app.use(express.json());
app.use(routes)


connectDatabase().then(()=> {
    app.listen(3000, () =>{
        console.log('server is running');
        console.log('localhost:3000');
    })
})
.catch((error) => console.log(error))
