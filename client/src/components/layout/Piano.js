import React  from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import Dimensions from '../utils/Dimensions';
import SoundfontProvider from '../utils/Soundfont';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('c4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

// export function ReactPiano() {
    // const firstNote = MidiNumbers.fromNote('c3');
    // const lastNote = MidiNumbers.fromNote('f5');
    // const keyboardShortcuts = KeyboardShortcuts.create({
    //   firstNote: firstNote,
    //   lastNote: lastNote,
    //   keyboardConfig: KeyboardShortcuts.HOME_ROW,
    // });

      function ResponsivePiano(props) {

        return (
          <Dimensions>
            {({ containerWidth }) => (
              <SoundfontProvider
                instrumentName="acoustic_grand_piano"
                audioContext={audioContext}
                hostname={soundfontHostname}
                render={({ isLoading, playNote, stopNote }) => (
                  <Piano
                    noteRange={noteRange}
                    width={containerWidth}
                    playNote={playNote}
                    stopNote={stopNote}
                    disabled={isLoading || props.modalStatus}
                    keyboardShortcuts={keyboardShortcuts}
                    {...props}
                  />
                )}
              />
            )}
          </Dimensions>
        );
      }
      

// return (
//     <ResponsivePiano />
// )

  // }

export default ResponsivePiano;