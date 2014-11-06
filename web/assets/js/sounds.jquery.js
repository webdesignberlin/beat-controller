blip.sampleLoader()
    .samples({
    'bassdrum': 'assets/sounds/pad/bassdrum.wav',
    'hit': 'assets/sounds/pad/hit.wav',
    
    'kick01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-01.wav',
    'kick02': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-02.wav',
    'kick03': 'assets/sounds/pad/musicradar-drum-samples/Drum-Kits/Kit_15-Electro/CYCdh_ElecK05-Kick02.wav',
    
    'hihat01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Hi-Hats/Acoustic/Acoustic-Hat-01.wav',
})
    .done(loaded)
    .load();

function loaded() {
    var defaultTempo = '140';

    var padItemName = 'sound',
        padItem = $('.'+padItemName),
        padLoopPlay = $('.'+padItemName+'--play'),
        padLoopPause = padLoopPlay.next('.'+padItemName+'--pause');
        
    padItem.on('click', function(){
        var actualThis = $(this),
            padSound = actualThis.data('sound'),
            padSoundTime = actualThis.data('sound-time'),
            playSound = blip.clip().sample(padSound);

            playSound.play(padSoundTime);
    });

    padLoopPlay.on('click', function(){
        var actualThis = $(this),
            padSound = actualThis.data('sound'),
            padSoundTime = actualThis.data('sound-time'),
            playLoop = blip.loop().tempo(defaultTempo).tick(
                            function (t) {
                              padSound.play(t)
                            }
                        );

        playLoop.start(0);
    });


        
    /**document.getElementById('pad__drum').addEventListener('click', function () {
        // play the clip immediately
        loopBassdrum.start(0);
    });
    document.getElementById('pad__drum--pause').addEventListener('click', function () {
        loopBassdrum.stop();
    });
    
    document.getElementById('pad__kick03').addEventListener('click', function () {
        // play the clip immediately
        loopsoundKick03.start(0);
    });
    document.getElementById('pad__kick03--pause').addEventListener('click', function () {
        loopsoundKick03.stop();
    });
    
    
    document.getElementById('pad__hit').addEventListener('click', function () {
        // play the clip immediately
        soundHit.play(0);

        // play the clip again in 5 seconds
        //soundHit.play(5);
    });
    document.getElementById('pad__kick01').addEventListener('click', function () {
        soundKick01.play(0);
    });
    document.getElementById('pad__kick02').addEventListener('click', function () {
        soundKick02.play(0);
    });
    document.getElementById('pad__hihat01').addEventListener('click', function () {
        soundHihat01.play(0);
    });*/
}