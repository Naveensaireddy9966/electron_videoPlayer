const fs  = require('fs')
video_count = 1;
videoPlayer = document.getElementById("homevideo");
maxVideoCount = 4;

function run(){
        //console.log("run function called")
        if (video_count == maxVideoCount) video_count = 1;
        var nextVideo = `video${video_count}.mp4`
        videoPlayer.src = nextVideo;
        videoPlayer.play();
        video_count++;
   };

function pauseVideo() {
        videoPlayer.pause()
}

videoPlayer.onplay = function() {
        console.log("Video is ready to start")
}

videoPlayer.onpause = function() {
        console.log("video is paused")
}

videoPlayer.onplaying = (function() {
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime ;
        console.log(dateTime);
        fs.writeFile('./logs/2023-03-22.txt', dateTime, (err) => {
                if (err) throw err;
        }) 
        
})

videoPlayer.onerror = function() {
        console.log("The video could not be loaded")
}


run();
document.getElementById("Btn").addEventListener("click",() => {
        console.log("button clicked")
        run()
})