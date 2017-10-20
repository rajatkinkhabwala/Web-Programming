const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let storyTitle = "My visit to Uttarakhand";
    let storyP1 = "During my first year of engineering, the IEEE student body of our college decided to go for an Industrial Visit to Uttarakhand, a state in Nothern India. When I came to know about this visit, I talked about it to my friends and we all decided that we should go for this trip. \n Uttarakhand is famous for its natural beauty, hill stations, the Himalayan mountains, forests and various Hindu pilgrimage places. After the final exams were over the day finally arrived. We all gathered at the railway station to board the train to New Delhi, the capital of India from Mumbai. It was a long journey about 14 hours by train. During our travel, we had a wonderful time talking to each other, singing and playing games in the train. After we reached Delhi, we then boarded a bus which was going to take us to Nainital, a hill station situated in the Himalayas. It was very cold outside. We arrived at the hotel and had dinner. The next morning we got ready, had our breakfast and then we all went to visit the town of Nainital. Situated between tall mountains and a big lake called Naini lake the town was very beautiful. We did boating in the lake, went for shopping at the local markets and took a ropeway to the snow point from where we could see a birds-eye view of the town. \n After enjoying for about two days it was time to go back home. We packed our bags and boarded the train back to Mumbai. I had a wonderful time visiting this beautiful place. I also made a lot of memories here with my friends which I will remember throughout my lifetime.";
    let storyData = {
        storyTitle:storyTitle,
        story: storyP1
    };
    res.json(storyData);
});

module.exports = router;