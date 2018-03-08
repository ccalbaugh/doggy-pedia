import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class DogWiki extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    render() {
        return (
            <section className="dog-wiki">
                <Editor />
            </section>
        );
    }
}

export default DogWiki;