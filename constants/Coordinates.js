const counseling = require("../assets/counseling-1.5x.png");
const internships = require("../assets/internships-1.5x.png");
const jobs = require("../assets/jobs-1.5x.png");
const workshops = require("../assets/Workshop-1.5x.png");

const coordinates = [
    {key:1,
    coordinate: {
        latitude: 34.0452,
        longitude: -118.2337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: counseling},
    {key:2,
    coordinate: {
        latitude: 34.0570,
        longitude: -118.2437,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: internships},
    {key:3,
    coordinate:{
        latitude: 34.0422,
        longitude: -118.2637,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon:jobs},
    {key:4,
        coordinate:{
            latitude: 34.0325,
            longitude: -118.2450,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        icon:workshops},



]

export default coordinates;