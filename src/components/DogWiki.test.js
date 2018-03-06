import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogWiki from './DogWiki'

describe('Given `DogWiki`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogWiki {...props} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `section` with a specific class name', () => {

        expect(component.find('.dog-wiki').type()).to.equal('section');

    });

    it('should contain a `DraftEditor`', () => {

        expect(component.find('DraftEditor').exists()).to.be.true()
        
    });

    it('should contain `editorState`', () => {
        
        component.setState({ editorState: {} })

        expect(component.state()).to.equal({ editorState: {} })

    })

});