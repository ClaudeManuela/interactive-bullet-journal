import React from "react";
import Notes from "./Braindump/Notes";
import Timestamp from "./Braindump/Timestamp";
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';


function Braindump() {
  return (
    <div className="Braindump">
      <Timestamp />
      <Notes />
     
    </div>
  );
}

export default Braindump;