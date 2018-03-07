import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { DogSearchForm } from './DogSearchForm'

describe('Given `DogSearchForm`', () => {

    let component,
        action;

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<DogSearchForm {...props} />);
    }

    beforeEach(() => {
        action = sinon.spy();
        component = renderComponent({ searchBreed: action });
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

        describe('When the `form` is submitted', () => {

            beforeEach(() => {
                component.find('.dog-search-form').simulate('submit', {
                    preventDefault: () => {}
                });
            })

            it('should call an action', () => {

                sinon.assert.calledOnce(action);

            });

            it('should clear the `currentInput`', () => {

                expect(component.state()).to.equal({ currentInput: '' });

            });

        });

    });

});