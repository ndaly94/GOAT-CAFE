const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once('open', () => {
    console.log('connected to mongo who shows love')
})