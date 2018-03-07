import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogApp from './DogApp'

describe('Given `DogApp`', () => {

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

    it('should contain a `Connected DogSearchForm', () => {

        expect(component.find('Connect(DogSearchForm)').exists()).to.be.true()

    });

    it('should contain a `Connected DogShow`', () => {

        expect(component.find('Connect(DogShow)').exists()).to.be.true()

    })

    it('should contain a `DogWiki`', () => {

        expect(component.find('DogWiki').exists()).to.be.true()

    });

});