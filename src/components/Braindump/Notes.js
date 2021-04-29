import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
 
class Notes extends Component {
    constructor(props) {
        super(props);
    }  
    render() {
        return (
            <ReactStickyNotes />
        )
    }
};

export default Notes;