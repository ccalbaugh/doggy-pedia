import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import './DogWiki.css';

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

function onChange(editorState) {
    this.setState({ editorState });
}

class DogWiki extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    render() {
        return (
            <section className="dog-wiki">
                <div className="editor" onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={onChange.bind(this)}
                        plugins={[toolbarPlugin]}
                    />
                    <Toolbar />                
                </div>
            </section>
        );
    }
}

export default DogWiki;