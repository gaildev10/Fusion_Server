const express = require('express')
const app = express()
const cors = require('cors')
const { text } = require('body-parser')
const PORT = 8000

app.use(cors())

const fusion = {
    "weather report": {
        "groupName": "Weather Report",
        "yearsActive": "1970-1986",
        "musicians": {
            "joe zawinul": {
                "musicianName": "Joe Zawinul",
                "musicianInstrument": 'keyboards',
            },
            
            "wayne shorter": {
                "musicianName": "Wayne Shorter",
                "musicianInstrument": 'saxophone'
            },
            "miroslav vitouš": {
                "musicianName": "Miroslav Vitouš",
                "musicianInstrument": 'bass'
            },
            "alphonse mouzon ": {
                "musicianName": "Alphonse Mouzon ",
                "musicianInstrument": 'drums'
            },
        },
        "releases": {
            "weather report ": { 
            "title": "Weather Report ", 
            "year released": "1971",
            "record label": "Columbia",
            },
        },
        "image": "assets/weather_report.png",
    },

    "return to forever": {
        "groupName": "Return To Forever",
        "yearsActive": '1972-1977',
        "musicians": {
            "chick corea": {
                "musicianName": "Chick Corea",
                "musicianInstrument": 'keyboards',
            },
            
            "stanley clarke": {
                "musicianName": "Stanley Clarke",
                "musicianInstrument": 'bass',
            },
            "flora purim": {
                "musicianName": "Flora Purim",
                "musicianInstrument": 'vocals',
            },
            "airto moreira": {
                "musicianName": "Airto Moreira",
                "musicianInstrument": 'percussion',
            },
            "joe farrell ": {
                "musicianName": "Joe Farrell ",
                "musicianInstrument": 'saxophone',
            },
        },
        "releases": {
            "light as a feather": { 
            "title": "Light as a Feather", 
            "year released": "1973",
            "record label": "Polydor Records",
            },
        },
        "image": "assets/Return_to_Forever_1976.jpg",

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

