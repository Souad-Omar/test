const mongoose = require('mongoose')

        mongoose
            .connect('mongodb+srv://souad:souad12345@cluster0.icrds.mongodb.net/test', { useNewUrlParser: true })
            .catch(e => {
                console.error('Connection error', e.message)
            })

        const db = mongoose.connection

        module.exports = db
