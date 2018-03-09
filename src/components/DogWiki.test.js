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

    it('contains a `Decorated(Toolbar)` and a `PluginEditor`', () => {

        expect(component.find('Decorated(Toolbar)').exists()).to.be.true();
        expect(component.find('PluginEditor').exists()).to.be.true();

    });

    it('contains a `Decorated(EmojiSuggestions)` and a `Decorated(EmojiSelect)`', () => {

        expect(component.find('Decorated(EmojiSuggestions)').exists()).to.be.true();
        expect(component.find('Decorated(EmojiSelect)').exists()).to.be.true();

    });

    it('has an intitial `editorState`', () => {

        expect(component.state().editorState).to.exist();

    });

});