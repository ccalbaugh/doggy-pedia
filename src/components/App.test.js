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

    it('should exist as a `main` tag', () => {

        expect(component.type()).to.equal('main');

    });

});