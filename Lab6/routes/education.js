const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let schoolName = "Stevens Institute of Technology";
    let degree = "Masters In Computer Science";
    let favouriteClass = "My favourite class from Stevens was CS561 Database Management Systems. This class was taught by Prof Samuel Kim. Databases being one of my favourite areas of interest I enjoyed going to this class. Also, Prof Kim was an excellent professor.";
    let memorableMemory = "Being an international student from India studying in Stevens was indeed a new experience for me. The most memorable memory about Stevens was the Diwali celebration organised by IGSA.";
    let stevens = {
        schoolName:schoolName,
        degree:degree,
        favouriteClass:favouriteClass,
        favouriteMemory: memorableMemory
    };
    let schoolName1 = "Gujarat Technological University";
    let degree1 = "Bachelor of Engineering - Computer Engineering";
    let favouriteClass1 = "My favourite class was Distributed Systems class.";
    let memorableMemory1 = "Our college used to organise a cultural festival every year in the month of February called 'Surge'. This festival used to have a number of events related to dance, music, singing, sports and also a DJ night. I used to enjoy going to this festival with my friends. This is one my most memorable memory from my undergraduate college.";
    let kj = {
        schoolName:schoolName1,
        degree:degree1,
        favouriteClass:favouriteClass1,
        favouriteMemory: memorableMemory1
    };
    let schoolName2 = "M.T Jariwala High School";
    let degree2 = "Secondary School Certificate";
    let favouriteClass2 = "My favourite class from my high school was English which was taught by Mrs Brinda Mahesh.";
    let memorableMemory2 = "The most memorable memory I have about by school is our school's Annual Day celebration. Our class had performed a group dance on Indian movie songs. We had also won the best performance award.";
    let swm = {
        schoolName:schoolName2,
        degree:degree2,
        favouriteClass:favouriteClass2,
        favouriteMemory: memorableMemory2
    };
    let arr = [stevens,kj,swm];
    res.json(arr);
});

module.exports = router;