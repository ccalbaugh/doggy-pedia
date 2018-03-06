import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogSearchForm from './DogSearchForm'

describe('Give `DogSearchForm`', () => {

    let component

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogSearchForm {...props} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `form` with a specific class name', () => {

        expect(component.find('.dog-search-form').type()).to.equal('form');

    });

    it('should contain a `input` and a `button` with specific class names', () => {

        expect(component.find('.dog-search-input').type()).to.equal('input');
        expect(component.find('.dog-search-button').type()).to.equal('button');
        
    })

});