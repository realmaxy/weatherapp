import React from 'react'

export default function WindDirection({windDir}) {
    switch(windDir) {
        case 'N':
            return('северный')
        case 'NNE': 
        case 'NE': 
        case 'ENE':
            return('северо-восточный')
        case 'E':
            return('восточный')
        case 'ESE':
        case 'SE':
        case 'SSE':
            return('юго-восточный')
        case 'S':
            return('южный')
        case 'SSW':
        case 'SW': 
        case 'WSW':
            return('юго-западный')
        case 'W':
            return('западный')
        case 'WNW':
        case 'NW':
        case 'NNW':
            return('северо-западный')
        default: 
            return null;
    }
}
