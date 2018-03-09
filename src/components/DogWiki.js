import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import './DogWiki.css';

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const plugins = [
    toolbarPlugin,
    emojiPlugin
];

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
                        plugins={plugins}
                    />
                    <Toolbar />
                    <EmojiSuggestions />
                    <EmojiSelect />                
                </div>
            </section>
        );
    }
}

export default DogWiki;