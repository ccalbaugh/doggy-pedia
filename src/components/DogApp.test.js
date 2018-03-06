import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from './App'

describe('Give `App`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<App {...props} />);
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

});