import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogApp from './DogApp'

describe('Give `DogApp`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogApp {...props} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `main` with a specific class name', () => {

        expect(component.find('.dog-app').type()).to.equal('main');

    });

    it('should contain a `DogSearchForm', () => {

        expect(component.find('DogSearchForm').exists()).to.be.true()

    });

    it('should contain a `DogShow`', () => {

        expect(component.find('DogShow').exists()).to.be.true()

    })

    it('should contain a `DogWiki`', () => {

        expect(component.find('DogWiki').exists()).to.be.true()

    })

});