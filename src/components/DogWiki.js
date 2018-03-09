import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import './DogWiki.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const toolbarPlugin = createToolbarPlugin();

const { Toolbar } = toolbarPlugin;

const plugins = [toolbarPlugin, emojiPlugin];

function onChange(editorState) {
    this.setState({ editorState });
}

function focus() {
    this.editor.focus();
}

class DogWiki extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    render() {
        return (
            <section className="dog-wiki">
                <div className="editor editing-editor" onClick={focus.bind(this)}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={onChange.bind(this)}
                        plugins={plugins}
                        ref={(element) => { this.editor = element }}
                    />
                    <Toolbar />
                    <EmojiSuggestions />
                    <EmojiSelect />            
                </div>
                <div className="editor preview-editor">
                    <Editor
                        editorState={this.state.editorState}
                    />
                </div>
            </section>
        );
    }
}

export default DogWiki;