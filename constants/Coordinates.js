const counseling = require("../assets/counslingOutline.png");
const internships = require("../assets/internshipsOutline.png");
const jobs = require("../assets/jobOutline.png");
const workshops = require("../assets/workshopsOutline.png");

const coordinates = [
    {key:"counseling",
    index:0,
    coordinate: {
        latitude: 34.0452,
        longitude: -118.2337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: counseling,
    buisnessName: "Mirror Memiors",
    buisnessType: "Counseling",
    buisnessLocation: "1235 Lanston Blvd, Los Angeles, CA 90321",
    buisnessWebsite:"mirrormemoris.org",
    phone:'(323)-1234-567',
    buisnessDetails:"This workshop incorporates various practitioners, scholars, and organizers from different backgrounds who have dedicated to disability and transformative justice movements for many years.",
     },
    {key:"internships",
    index:1,
    coordinate: {
        latitude: 34.0570,
        longitude: -118.2437,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon: internships,
    buisnessName: "It Gets Better",
    buisnessType: "Internships",
    buisnessLocation: "1235 Sunset Blvd, Los Angeles, CA 90061",
    buisnessWebsite:"getsbetter.com",
    phone:'(323)-1234-567',
    buisnessDetails:"This workshop incorporates various practitioners, scholars, and organizers from different backgrounds who have dedicated to disability and transformative justice movements for many years.",
     },
    {key:"jobs",
    index:2,
    coordinate:{
        latitude: 34.0422,
        longitude: -118.2637,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    icon:jobs,
        buisnessName: "Job Points",
        buisnessType: "Jobs",
        buisnessLocation: "1235 Sunset Blvd, Los Angeles, CA 90061",
        buisnessWebsite:"getsbetter.com",
        phone:'(323)-1234-567',
        buisnessDetails:"This workshop incorporates various practitioners, scholars, and organizers from different backgrounds who have dedicated to disability and transformative justice movements for many years.",
    },
    {key:"workshops",
    index:3,
        coordinate:{
            latitude: 34.0325,
            longitude: -118.2450,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        icon:workshops,
        buisnessName: "Access Points",
        buisnessType: "Workshops",
        buisnessLocation: "1235 Sunset Blvd, Los Angeles, CA 90061",
        buisnessWebsite:"getsbetter.com",
        phone:'(323)-1234-567',
        buisnessDetails:"This workshop incorporates various practitioners, scholars, and organizers from different backgrounds who have dedicated to disability and transformative justice movements for many years.",
    },



]

export default coordinates;