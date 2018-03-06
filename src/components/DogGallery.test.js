import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogGallery from './DogGallery'

describe('Given `DogGallery`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogGallery {...props} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `ul` with a specific class name', () => {

        expect(component.find('.dog-gallery').type()).to.equal('ul');

    });

});