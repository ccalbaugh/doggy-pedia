import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DogGallery from './DogGallery'

describe('Given `DogGallery`', () => {

    let component;

    const mockImages = [
        "https://dog.ceo/api/img/akita/512px-Ainu-Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Inu_dog.jpg"
    ];

    function requiredProps(overrides = {}) {
        return {
            ...overrides
        };
    }

    function renderComponent(props = requiredProps()) {
        const newProps = requiredProps(props);
        return shallow(<DogGallery {...newProps} />);
    }

    beforeEach(() => {
        component = renderComponent();
    })

    it('should exist as a `ul` with a specific class name', () => {

        expect(component.find('.dog-gallery').type()).to.equal('ul');

    });

    describe('When `DogGallery` has no `breedImages`', () => {

        it('should return a `span` with a specific class name', () => {

            expect(component.find('.no-breed-images-text').type()).to.equal('span');

        });

    });

    describe('When `DogGallery` has `breedImages`', () => {

        it('should return a list of images for each `breedImage`', () => {

            component = renderComponent({ breedImages: mockImages });

            expect(component.find('li').length).to.equal(mockImages.length);

        });

    });

});