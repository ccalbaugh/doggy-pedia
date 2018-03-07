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

});