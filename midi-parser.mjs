// import {MidiParser} from './node_modules/midi-parser-js/src/midi-parser.js'

// window.onload = function(){
//     // configure MIDIReader
//     var source = document.getElementById('filereader');
//     MidiParser.parse( source, function(obj){
//         // Your callback function
//         console.log(obj);
//         const midiFile  = JSON.stringify(obj, undefined, 2);
//         console.log(midiFile);
//         let midiEventTab = midiFile.track;
//         console.log(midiEventTab);
//     });

// };

//tonejsmidi
//use this librairy
const test ="hello";
console.log(test)
// load a midi file in the browser
const midi = await Midi.fromUrl("music/getJinxed/melody.mid");
console.log(midi);
//the file name decoded from the first track
const name = midi.name

//get the tracks
midi.tracks.forEach(track => {
    
  //tracks have notes and controlChanges
  //notes are an array
 const notes = track.notes
 const C5X = [];
 const C5 = [];
 const A4 = [];
 const G4X = [];
 const G4 = [];
 const E4 = [];
 const F4X = [];
 const D4X = [];
 const C4X = [];
 const C4 = [];
 console.log(C5X);
 console.log(C5);
 console.log(A4);
 console.log(G4);
 console.log(D4X);
 console.log(C4X);

 notes.forEach(note => {
     let noteLangage = note.Midi;
     let noteDuration = note.duration;
     let noteName = note.name;
     if(noteName === 'C5#'){
         C5X.push(note);
         //obstacle1
     }else if(noteName === "C5"){
         //obstacle 2
         C5.push(note);

     }else if(noteName === "A4"){
        A4.push(note);

     }else if(noteName === "G4#"){
        G4X.push(note);

     }else if(noteName === "G4"){
        G4.push(note);

    }else if(noteName === "E4"){
        E4.push(note);

    }else if(noteName === "F4#"){
        F4X.push(note);

    }else if(noteName === "D4#"){
        D4X.push(note);

    }else if(noteName === "C4#"){
        C4X.push(note);

    }else if(noteName === "C4"){
        C4.push(note);

    }
     //note.midi, note.time, note.duration, note.name
 })
 console.log(C5X);
 console.log(C5);
 console.log(A4);
 console.log(G4);
 console.log(D4X);
 console.log(C4X);

})


//  let currentMidi = null;

//  function parseFile(file) {
//      //read the file
//      const reader = new FileReader();
//      reader.onload = function (e) {
//          const midi = new Midi(e.target.result);
//          document.querySelector(
//              "#ResultsText"
//          ).value = JSON.stringify(midi, undefined, 2);
//          document
//              .querySelector("tone-play-toggle")
//              .removeAttribute("disabled");
//          currentMidi = midi;
//      };
//      reader.readAsArrayBuffer(file);
//  }

 // const synths = [];
 // document
 //     .querySelector("tone-play-toggle")
 //     .addEventListener("play", (e) => {
 //         const playing = e.detail;
 //         if (playing && currentMidi) {
 //             const now = Tone.now() + 0.5;
 //             currentMidi.tracks.forEach((track) => {
 //                 //create a synth for each track
 //                 const synth = new Tone.PolySynth(Tone.Synth, {
 //                     envelope: {
 //                         attack: 0.02,
 //                         decay: 0.1,
 //                         sustain: 0.3,
 //                         release: 1,
 //                     },
 //                 }).toDestination();
 //                 synths.push(synth);
 //                 //schedule all of the events
 //                 track.notes.forEach((note) => {
 //                     synth.triggerAttackRelease(
 //                         note.name,
 //                         note.duration,
 //                         note.time + now,
 //                         note.velocity
 //                     );
 //                 });
 //             });
 //         } else {
 //             //dispose the synth and make a new one
 //             while (synths.length) {
 //                 const synth = synths.shift();
 //                 synth.disconnect();
 //             }
 //         }
 //     });


  //the control changes are an object
  //the keys are the CC number
//   track.controlChanges[64]
  //they are also aliased to the CC number's common name (if it has one)
//   track.controlChanges.sustain.forEach(cc => {
    // cc.ticks, cc.value, cc.time
//   })

  //the track also has a channel and instrument
  //track.instrument.name


// // load a midi file in the browser
//  const midi = await Midi.fromUrl("music/getJinxed/get-jinxed-drums.mid");
//  console.log(midi);
//  //the file name decoded from the first track
//  const name = midi.name
//  //get the tracks
//  midi.tracks.forEach(track => {
//  //tracks have notes and controlChanges

 
 
// <!-- midi convert -->
// <!-- <script type="text/javascript">
//         if (
//             !(
//                 window.File &&
//                 window.FileReader &&
//                 window.FileList &&
//                 window.Blob
//             )
//         ) {
//             document.querySelector("#FileDrop #Text").textContent =
//                 "Reading files not supported by this browser";
//         } else {
//             const fileDrop = document.querySelector("#FileDrop");

//             fileDrop.addEventListener("dragenter", () =>
//                 fileDrop.classList.add("Hover")
//             );

//             fileDrop.addEventListener("dragleave", () =>
//                 fileDrop.classList.remove("Hover")
//             );

//             fileDrop.addEventListener("drop", () =>
//                 fileDrop.classList.remove("Hover")
//             );

//             document
//                 .querySelector("#FileDrop input")
//                 .addEventListener("change", (e) => {
//                     //get the files
//                     const files = e.target.files;
//                     if (files.length > 0) {
//                         const file = files[0];
//                         document.querySelector(
//                             "#FileDrop #Text"
//                         ).textContent = file.name;
//                         parseFile(file);
//                     }
//                 });
//         }
//         window.document.onload = parseFile
//         let currentMidi = null;

//         function parseFile(file) {
//             //read the file
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 const midi = new Midi(e.target.result);
//                 document.querySelector(
//                     "#ResultsText"
//                 ).value = JSON.stringify(midi, undefined, 2);
//                 document
//                     .querySelector("tone-play-toggle")
//                     .removeAttribute("disabled");
//                 currentMidi = midi;
//             };
//             reader.readAsArrayBuffer(file);
//         }

//         const synths = [];
//         document
//             .querySelector("tone-play-toggle")
//             .addEventListener("play", (e) => {
//                 const playing = e.detail;
//                 if (playing && currentMidi) {
//                     const now = Tone.now() + 0.5;
//                     currentMidi.tracks.forEach((track) => {
//                         //create a synth for each track
//                         const synth = new Tone.PolySynth(Tone.Synth, {
//                             envelope: {
//                                 attack: 0.02,
//                                 decay: 0.1,
//                                 sustain: 0.3,
//                                 release: 1,
//                             },
//                         }).toDestination();
//                         synths.push(synth);
//                         //schedule all of the events
//                         track.notes.forEach((note) => {
//                             synth.triggerAttackRelease(
//                                 note.name,
//                                 note.duration,
//                                 note.time + now,
//                                 note.velocity
//                             );
//                         });
//                     });
//                 } else {
//                     //dispose the synth and make a new one
//                     while (synths.length) {
//                         const synth = synths.shift();
//                         synth.disconnect();
//                     }
//                 }
//             }); -->
// <!-- </script>	 -->