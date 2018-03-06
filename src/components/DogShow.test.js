import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogShow from './DogShow'

describe('Give `DogShow`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogShow {...props} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `section` with a specific class name', () => {

        expect(component.find('.dog-show').type()).to.equal('section');

    });

    it('should contain a `.previous-button`, a `DogGallery`, and a `.next-button`', () => {

        expect(component.find('.previous-button').type()).to.equal('button');
        expect(component.find('.next-button').type()).to.equal('button');
        expect(component.find('DogGallery').exists()).to.be.true();
        
    })

});