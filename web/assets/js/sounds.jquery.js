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
        padLoopPause = $('.'+padItemName+'--pause');
        
    padItem.on('click', function(){
        var actualThis = $(this),
            padSound = actualThis.data('sound'),
            padSoundTime = actualThis.data('sound-time'),
            playSound = blip.clip().sample(padSound);

            playSound.play(padSoundTime);
    });

    padLoopPlay.on('click', function(){
        var actualThis = $(this),
            isPlaying = 'false',
            padSound = actualThis.data('sound'),
            padSoundTime = actualThis.data('sound-time'),
            playSound = blip.clip().sample(padSound),
            playLoop = blip.loop()
              .tempo(defaultTempo)
              .tick(function (t) {
                  playSound.play(t)
              });
        if (actualThis.hasClass('is-playing')){
            // @TODO Doesnt work
            playLoop.stop();
            actualThis.removeClass('is-playing');
        } else {
            playLoop.start(padSoundTime);
            actualThis.addClass('is-playing');
        }
    });
}