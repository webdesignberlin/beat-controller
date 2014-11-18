$(document).ready(function() {

  var defaultTempo = '140';

  var padItemName = 'sound',
    padItem = $('.'+padItemName),
    padLoopPlayName = padItemName+'--play',
    padLoopPauseName = padItemName+'--pause',
    padLoopPlay = $('.'+padLoopPlayName),
    padLoopPause = $('.'+padLoopPauseName);

  /**
   * 'bassdrum': 'assets/sounds/pad/bassdrum.wav',
   'hit': 'assets/sounds/pad/hit.wav',

   'kick01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-01.wav',
   'kick02': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Kicks/Acoustic/CYCdh_AcouKick-02.wav',
   'kick03': 'assets/sounds/pad/musicradar-drum-samples/Drum-Kits/Kit_15-Electro/CYCdh_ElecK05-Kick02.wav',

   'hihat01': 'assets/sounds/pad/musicradar-drum-samples/Assorted-Hits/Hi-Hats/Acoustic/Acoustic-Hat-01.wav',
   **/


  function soundLoop(actualThis){
    actualThis.on('ended', function(){
      this.currentTime = 0;
      this.play();
    });
  }


  padItem.on('click', function(){
    var actualThis = $(this),
      padSound = actualThis.data('sound'),
      padSoundTime = actualThis.data('sound-time');

    //soundLoop(actualThis);




  });


});

document.getElementById('blubb').addEventListener('ended', function(){
  //this.currentTime = 50000;
  this.play();
}, false);