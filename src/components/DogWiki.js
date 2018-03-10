import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton
} from 'draft-js-buttons';
  
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import './DogWiki.css';


const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin; 

const toolbarPlugin = createToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        EmojiSelect,
        EmojiSuggestions
    ]
  });

const { Toolbar } = toolbarPlugin;

const plugins = [toolbarPlugin, emojiPlugin];

function onChange(editorState) {
    this.setState({ editorState });
}

function focus() {
    this.editor.focus();
}

function preview() {
    this.setState({ previewState: this.state.editorState })
}

class DogWiki extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        previewState: EditorState.createEmpty()
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
                    <div className="toolbar-container">
                        <Toolbar />   
                        <button className="preview-button" onClick={preview.bind(this)}>Preview</button>
                    </div>       
                </div>
                <div className="editor preview-editor">
                    <Editor
                        editorState={this.state.previewState}
                    />
                </div>
            </section>
        );
    }
}

export default DogWiki;