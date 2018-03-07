import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogSearchForm from './DogSearchForm'

describe('Given `DogSearchForm`', () => {

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

    describe('When the `input` has no value', () => {

        it('should contain state with a currentInput', () => {

            expect(component.state()).to.equal({ currentInput: '' })
    
        });

    });

    describe('When the `input` has a value', () => {

        let mockValue;

        beforeEach(() => {
            mockValue = 'akita';
            component.find('.dog-search-input').simulate('change', { target: { value: mockValue } } );
        })

        it('should reflect that change in the state', () => {

            expect(component.state()).to.equal({ currentInput: 'akita' });

        });

    });

});