import React, { Component } from 'react'
import { Editor, EditorState } from 'draft-js'

function onChange(editorState) {
    this.setState({ editorState })
}

class DogWiki extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    render() {
        return (
            <section className="dog-wiki">
                <Editor editorState={this.state.editorState} onChange={onChange.bind(this)} />
            </section>
        );
    }
}

export default DogWiki;