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
// const midi = await Midi.fromUrl("music/getJinxedFinal/melody.mid");
// console.log(midi);
//the file name decoded from the first track
// const name = midi.name
const drums =  await Midi.fromUrl("music/getJinxedFinal/drums.mid");
console.log('drums',drums);

const kick =   await Midi.fromUrl("music/getJinxedFinal/kick.mid");
console.log('kick',kick);
let D =[];
    let E = [];
kick.tracks.forEach(track => {
    const notes = track.notes;
    
    for (let index = 0; index < notes.length-1; index+=2) {
        let noteName = notes[index].name;
        if(noteName === 'C2'){
            D.push(notes[index]);
            E.push(notes[index+1]);
        }

        
    }});
    console.log(D);
    console.log(E);

    let Dpartition = document.getElementById("D");
    D.forEach(noteD => {
        Dpartition.innerHTML += '<div style="width:'+noteD.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteD.ticks+'px"></div>'
        
    });

    let Epartition = document.getElementById("E");
    E.forEach(noteE => {
        console.log(noteE);
        Epartition.innerHTML += '<div style="width:'+noteE.durationTicks+'px; height: 50px; background-color:red;position:absolute; left:'+noteE.ticks+'px"></div>'
        
    });
    


// //get the tracks
// midi.tracks.forEach(track => {
    
//   //tracks have notes and controlChanges
//   //notes are an array
//  const notes = track.notes
//  const C6X = [];
//  const C6 = [];
//  const C5X = [];
//  const C5 = [];
//  const A5X = [];
//  const A4 = [];
//  const G5X = [];
//  const G4X = [];
//  const G4 = [];
//  const E5 = [];
//  const E4 = [];
//  const F5X = [];
//  const F5 = [];
//  const F4X = [];
//  const D6X = [];
//  const D5X = [];
//  const D4X = [];
//  const C4X = [];
//  const C4 = [];

//  const A =[];
//  const B = [];
//  const C = [];
//  const D = [];
//  const E = [];
//  const F = [];
//  const G = [];


//  notes.forEach(note => {
//      let noteLangage = note.Midi;
//      let noteDuration = note.duration;
//      let noteName = note.name;
//     if(noteName === 'C#6'){
//          C.push(note);
//          //obstacle1
//      }else if(noteName === 'C6'){
//         C.push(note);
//         //obstacle1
//     }else if(noteName === 'C#5'){
//          C.push(note);
//          //obstacle1
//      }else if(noteName === "C5"){
//          //obstacle 2
//          C.push(note);

//      }else if(noteName === "A#5"){
//         //obstacle 2
//         A.push(note);

//     }else if(noteName === "A4"){
//         A.push(note);

//      }else if(noteName === "B5"){
//         B.push(note);

//      }else if(noteName === "G#5"){
//         G.push(note);

//      }else if(noteName === "G#4"){
//         G.push(note);

//      }else if(noteName === "G4"){
//         G.push(note);

//     }else if(noteName === "E5"){
//         E.push(note);

//     }else if(noteName === "E4"){
//         E.push(note);

//     }else if(noteName === "F#5"){
//         F.push(note);

//     }else if(noteName === "F5"){
//         F.push(note);

//     }else if(noteName === "F#4"){
//         F.push(note);

//     }else if(noteName === "D#6"){
//         D.push(note);

//     }else if(noteName === "D#5"){
//         D.push(note);

//     }else if(noteName === "D#4"){
//         D.push(note);

//     }else if(noteName === "C#4"){
//         C.push(note);

//     }else if(noteName === "C4"){
//         C.push(note);

//     }
//      //note.midi, note.time, note.duration, note.name
//  })
// //  console.log(C);
// //  console.log(B);
// //  console.log(A);
// //  console.log(G);
// //  console.log(D);
// //  console.log(E);
// //  console.log(F);


// let Epartition = document.getElementById("E");
// E.forEach(noteE => {
//     Epartition.innerHTML += '<div style="width:'+noteE.durationTicks+'px; height: 50px; background-color:red;position:absolute; left:'+noteE.ticks+'px"></div>'
    
// });
// let Cpartition = document.getElementById("C");
// C.forEach(noteC => {
//     Cpartition.innerHTML += '<div style="width:'+noteC.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteC.ticks+'px"></div>'
    
// });
// let Apartition = document.getElementById("A");
// A.forEach(noteA => {
//     Apartition.innerHTML += '<div style="width:'+noteA.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteA.ticks+'px"></div>'
    
// });
// let Fpartition = document.getElementById("F");
// F.forEach(noteF => {
//     Fpartition.innerHTML += '<div style="width:'+noteF.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteF.ticks+'px"></div>'
    
// });
// let Dpartition = document.getElementById("D");
// D.forEach(noteD => {
//     Dpartition.innerHTML += '<div style="width:'+noteD.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteD.ticks+'px"></div>'
    
// });
// let Gpartition = document.getElementById("G");
// G.forEach(noteG => {
//     Gpartition.innerHTML += '<div style="width:'+noteG.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteG.ticks+'px"></div>'
    
// });
// let Bpartition = document.getElementById("B");
// B.forEach(noteB => {
//     Bpartition.innerHTML += '<div style="width:'+noteB.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+noteB.ticks+'px"></div>'
    
// });

// })

// let F2X = [];
// let D2 = [];
// drums.tracks.forEach(track => {
//     const notes = track.notes
//     notes.forEach(note => {
//         const  pulseName = note.name;
//         if(pulseName === 'F#2'){
//             F2X.push(note);
//         }else if (pulseName === 'D2'){
//             D2.push(note);
//         }
//     });
// });

// let F2partition = document.getElementById("F2");
// F2X.forEach(pulseF => {
//     F2partition.innerHTML += '<div style="width:'+pulseF.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+pulseF.ticks+'px"></div>'
    
// });
// let D2partition = document.getElementById("D2");
// D2.forEach(pulseD => {
//     D2partition.innerHTML += '<div style="width:'+pulseD.durationTicks+'px; height: 50px; background-color:red;position:absolute; left :'+pulseD.ticks+'px"></div>'
    
// });
// console.log(F2X);
// // console.log(D2);

let ticklenght = 1;//1tick=10px
let songlenght = 29473; //ticks total song
let partition = document.getElementById("partition");
let partitionPositionLeft = 200;
partition.style.left = partitionPositionLeft +'px';
function partitiondefile(){
 partitionPositionLeft = partitionPositionLeft - ticklenght;
partitionPositionLeft=partitionPositionLeft-ticklenght
    partition.style.left = partitionPositionLeft+'px';
}

// for (let index = 0; index < songlenght ; index++) {
//     partitionPositionLeft = partitionPositionLeft - ticklenght;
//     partition.style.left = partitionPositionLeft +'px';
   
    
// }
setInterval(partitiondefile, 10); 
    
        // partition.style.left -= ticklenght +"px";
        // songlenght-1;

    




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