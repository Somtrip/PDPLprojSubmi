// Replace 'YOUR_API_KEY' with your actual YouTube API key
const API_KEY = 'AIzaSyBEX3oKWVQ9Ne6HTa_Dd59Rw9BYBKhpnto';
const VIDEO_ID = 'MZwoTIeAre0';


// Load the YouTube IFrame Player API asynchronously
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready
}

function onPlayerStateChange(event) {
    // You can handle player state changes if needed
}

// Load YouTube API script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
