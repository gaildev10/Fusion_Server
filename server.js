const express = require('express')
const app = express()
const cors = require('cors')
const { text } = require('body-parser')
const PORT = 8000

app.use(cors())

const fusion = {
    "weather report": {
        "groupName": "Weather Report",
        "yearsActive": "Years Active: 1970-1986",
        "image": "assets/weather_report.jpg",


        // "musicians": {
        //     "joe zawinul": {
        //         "musicianName": "Joe Zawinul",
        //         "musicianInstrument": 'keyboards',
        //     },
            
        //     "wayne shorter": {
        //         "musicianName": "Wayne Shorter",
        //         "musicianInstrument": 'saxophone'
        //     },
        //     "miroslav vitouš": {
        //         "musicianName": "Miroslav Vitouš",
        //         "musicianInstrument": 'bass'
        //     },
        //     "alphonse mouzon ": {
        //         "musicianName": "Alphonse Mouzon ",
        //         "musicianInstrument": 'drums'
        //     },
        // },
        // "releases": {
        //     "weather report ": { 
        //     "title": "Weather Report ", 
        //     "year released": "Year Released: 1971",
        //     "record label": "Record Label: Columbia",
        //     },
        // },
    },

    "return to forever": {
        "groupName": "Return To Forever",
        "yearsActive": 'Years Active: 1972-1977',
        "image": "assets/Return_to_Forever_1976.jpg",

        // "musicians": {
        //     "chick corea": {
        //         "musicianName": "Chick Corea",
        //         "musicianInstrument": 'keyboards',
        //     },
            
        //     "stanley clarke": {
        //         "musicianName": "Stanley Clarke",
        //         "musicianInstrument": 'bass',
        //     },
        //     "flora purim": {
        //         "musicianName": "Flora Purim",
        //         "musicianInstrument": 'vocals',
        //     },
        //     "airto moreira": {
        //         "musicianName": "Airto Moreira",
        //         "musicianInstrument": 'percussion',
        //     },
        //     "joe farrell ": {
        //         "musicianName": "Joe Farrell ",
        //         "musicianInstrument": 'saxophone',
        //     },
        // },
        // "releases": {
        //     "light as a feather": { 
        //     "title": "Light as a Feather", 
        //     "year released": "Year Released: 1973",
        //     "record label": "Record Label: Polydor Records",
        //     },
        // },

    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:groupName', (request,response)=>{
    const groupsName = request.params.groupName.toLowerCase()
    if(fusion[groupsName]){
        response.json(fusion[groupsName])
    }else{
        response.json(fusion['generic'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

