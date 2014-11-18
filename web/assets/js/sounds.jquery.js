$(document).ready(function() {

  blip.sampleLoader()
      .samples({
      'bassdrum': 'assets/sounds/pad/bassdrum.wav',
      'hit': 'assets/sounds/pad/hit.wav',

      'kick01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-01.wav',
      'kick02': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-02.wav',
      'kick03': 'assets/sounds/pad/musicradar-drum-samples/Drum-Kits/Kit_15-Electro/CYCdh_ElecK05-Kick02.wav',

      'hihat01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Hi-Hats/Acoustic/Acoustic-Hat-01.wav',
      'hihat02': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Hi-Hats/Acoustic/Acoustic-Hat-02.wav',
      'hihat03': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Hi-Hats/Acoustic/Acoustic-Hat-03.wav',

      'cymbals01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Cymbals/CYCdh_Crash-01.wav',
      'cymbals02': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Cymbals/CYCdh_Crash-02.wav',
      'cymbals03': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Cymbals/CYCdh_MultiCrashHi-03.wav',

      'blubb': 'assets/sounds/pad/male.mp3'
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


      var soundBassdrum = blip.clip().sample('bassdrum');
      var loopBassdrum = blip.loop()
        .tempo(defaultTempo)
        .tick(function (t) {
            soundBassdrum.play(t)
        });



   /* padLoopPlay.on('click', function(){

      var padSound = $(this).data('sound'),
          padSoundTime = $(this).data('sound-time');


      if ($(this).is('.sound--pause')) {
        loopBassdrum.stop(padSoundTime);
        $(this).removeClass(padLoopPauseName);
        $(this).addClass(padLoopPlayName);
      }else {
        loopBassdrum.start(padSoundTime);
        $(this).removeClass(padLoopPlayName);
        $(this).addClass(padLoopPauseName);
      };


    });*/


    padItem.on('click', function(){

      var actualThis = $(this),
          padSound = actualThis.data('sound'),
          padSoundTime = actualThis.data('sound-time'),
          playSound = blip.clip().sample(padSound);


      playSound.play(padSoundTime);
    });

  };

});


