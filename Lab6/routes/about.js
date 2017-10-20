const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let name = "Rajat Kinkhabwala";
    let bio = "Hey there! My name is Rajat and I am from Gujarat, India. I am a graduate student at Stevens Institute of Technology. I am currently pursuing Masters in Computer Science. \n I have completed my undergraduate studies from Gujarat Technological University. My undergraduate major was Computer Engineering.";
    let tvShows = ["Game of Thrones","Breaking Bad","Silicon Valley"];
    let hobbies = ["Listening to music","Reading","Travelling"];
    let aboutData = {
        name:name,
        biography:bio,
        favouriteShows:tvShows,
        hobbies:hobbies
    };
    res.json(aboutData);
});

module.exports = router;