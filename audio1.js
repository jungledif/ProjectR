
    // Existing code unchanged.
    window.onload = function() {
        var context = new AudioContext();
        // Setup all nodes
      
        }
    
        // One-liner to resume playback when user interacted with the page.
        document.querySelector('button').addEventListener('click', function() {
        context.resume().then(() => {
            // console.log('Playback resumed successfully');
        });
        });
           var sound = new Howl({
            src: ['music/getJinxedFinal/music-get-jinxed.wav']
        });
        sound.play();   