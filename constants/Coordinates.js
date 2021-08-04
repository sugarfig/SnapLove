const counseling = require("../assets/counslingOutline.png");
const internships = require("../assets/internshipsOutline.png");
const jobs = require("../assets/jobOutline.png");
const workshops = require("../assets/Workshop-1.5x.png");

const coordinates = [
    {key:"counseling",
    coordinate: {
        latitude: 34.0452,
        longitude: -118.2337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: counseling,
     },
    {key:"internships",
    coordinate: {
        latitude: 34.0570,
        longitude: -118.2437,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: internships,
    },
    {key:"jobs",
    coordinate:{
        latitude: 34.0422,
        longitude: -118.2637,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon:jobs,
    },
    {key:"workshops",
        coordinate:{
            latitude: 34.0325,
            longitude: -118.2450,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        icon:workshops,
    },



]

export default coordinates;