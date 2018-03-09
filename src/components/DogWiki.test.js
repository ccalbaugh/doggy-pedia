import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogWiki from './DogWiki'

describe('Given `DogWiki`', () => {

    let component;

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = {}) {
        const newProps = requiredProps(props);
        return shallow(<DogWiki {...newProps} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `section` with a specific class name', () => {

        expect(component.find('.dog-wiki').type()).to.equal('section');

    });

    it('should contain a `div.editing-editor` and a `div.preview-editor`', () => {

        expect(component.find('.editing-editor').exists()).to.be.true();
        expect(component.find('.preview-editor').exists()).to.be.true();

    })

    describe('Given `.editing-editor`', () => {

        it('should contain a `Decorated(Toolbar)` and a `PluginEditor`', () => {

            const editingEditor = component.find('.editing-editor');

            expect(editingEditor.find('Decorated(Toolbar)').exists()).to.be.true();
            expect(editingEditor.find('PluginEditor').exists()).to.be.true();
    
        });

        it('should contain a `.preview-button`', () => {

            const editingEditor = component.find('.editing-editor');

            expect(editingEditor.find('.preview-button').exists()).to.be.true();
    
        });

        describe('When the `.preview-button` is clicked', () => {

            it('should set the `previewState` to the `editorState`', () => {

                component.setState({ editorState: 1, previewState: 0 });

                expect(component.state().editorState).not.to.equal(component.state().previewState);

                component.find('.preview-button').simulate('click');

                expect(component.state().editorState).to.equal(component.state().previewState);
                
            });

        });
    
        it('should contain a `Decorated(EmojiSuggestions)` and a `Decorated(EmojiSelect)`', () => {

            const editingEditor = component.find('.editing-editor');
    
            expect(editingEditor.find('Decorated(EmojiSuggestions)').exists()).to.be.true();
            expect(editingEditor.find('Decorated(EmojiSelect)').exists()).to.be.true();
    
        });

    });

    describe('Given `.preview-editor`', () => {

        it('should contain a `PluginEditor`', () => {

            const previewEditor = component.find('.preview-editor');            

            expect(previewEditor.find('PluginEditor').exists()).to.be.true();
    
        });
    });

    it('has an intitial `editorState` and `previewState`', () => {

        expect(component.state().editorState).to.exist();
        expect(component.state().previewState).to.exist();

    });

});