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
        padLoopPlayName = padItemName+'--play',
        padLoopPauseName = padItemName+'--pause',
        padLoopPlay = $('.'+padLoopPlayName),
        padLoopPause = $('.'+padLoopPauseName);




    var soundBassdrum = blip.clip().sample('bassdrum'),
      soundHit = blip.clip().sample('hit'),
      soundKick01 = blip.clip().sample('kick01'),
      soundKick02 = blip.clip().sample('kick02'),
      soundKick03 = blip.clip().sample('kick03'),
      soundHihat01 = blip.clip().sample('hihat01');

    var loopBassdrum = blip.loop()
      .tempo(defaultTempo)
      .tick(function (t) {
          soundBassdrum.play(t)
      })


        
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

      playLoop.start(padSoundTime);
      actualThis.removeClass(padLoopPlayName);
      actualThis.addClass(padLoopPauseName);

    });

  // @TODO doesnt work
  padLoopPause.on('click', function(){
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

    playLoop.stop();
    actualThis.removeClass(padLoopPauseName);
    actualThis.addClass(padLoopPlayName);

  });






}