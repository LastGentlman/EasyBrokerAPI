const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
    const {query} = req.query
    // console.log('query: ',{query})

    const {data} =
        await axios.get(`
        https://api.easybroker.com/v1/properties?
        page=1
        &limit=20
        &search%5Bupdated_after%5D=2020-03-01T23%3A26%3A53.402Z
        &search%5Bupdated_before%5D=2025-03-01T23%3A26%3A53.402Z
        &search%5Boperation_type%5D=sale
        &search%5Bmin_price%5D=500000&search%5Bmax_price%5D=3000000
        &search%5Bmin_bedrooms%5D=1
        &search%5Bmin_bathrooms%5D=1
        &search%5Bmin_parking_spaces%5D=1
        &search%5Bmin_construction_size%5D=100
        &search%5Bmax_construction_size%5D=1000
        &search%5Bmin_lot_size%5D=100
        &search%5Bmax_lot_size%5D=1000
        &search%5Bstatuses%5D%5B%5D=published
        &key=zec74h8wwqpghuwu760i92ezlfmqvf`)
    if (data) {
        res.json(data)
    } else {
        res.status(401).json("Data not available")
    }
})

app.listen(3001, () => console.log('listenin in localhost:3001'))