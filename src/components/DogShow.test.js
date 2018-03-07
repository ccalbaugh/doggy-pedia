import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import ConnectedDogShow, { DogShow } from './DogShow'

describe('Given `DogShow`', () => {

    let component,
        sandbox,
        mockFetchAllBreeds,
        mockFetchRandomBreedImage;

    function requiredProps(overrides = {}) {
        return {
            fetchAllBreeds: mockFetchAllBreeds, 
            fetchRandomBreedImage: mockFetchRandomBreedImage,
            ...overrides
        };
    }

    function renderComponent(props = {}) {
        const newProps = requiredProps(props);
        return shallow(<DogShow {...newProps} />);
    }

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        mockFetchAllBreeds = sandbox.spy();
        mockFetchRandomBreedImage = sandbox.spy();
        component = renderComponent();
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('should exist as a `section` with a specific class name', () => {

        expect(component.find('.dog-show').type()).to.equal('section');

    });

    describe('When the component mounts', () => {

        it('should dispatch fetchAllBreeds()', () => {

            sinon.assert.calledOnce(mockFetchAllBreeds);

        });

        describe('When `currentBreed` contains no breeds', () => {


            it('should show a `span` with a specific class name', () => {

                expect(component.find('.no-breeds-text').type()).to.equal('span');

            });

        });

        describe('When `currentBreed` contains exactly one breed', () => {

            beforeEach(() => {
                component = renderComponent({ currentBreed: ['akita'] });
            })

            it('should contain a `.dog-gallery-container`', () => {

                expect(component.find('.dog-gallery-container').type()).to.equal('div');

            })

            describe('Given `.dog-gallery-container`', () => {

                it('should contain a `.previous-button`, a `DogGallery`, and a `.next-button`', () => {

                    const dogGalleryContainer = component.find('.dog-gallery-container');

                    expect(dogGalleryContainer.find('.previous-button').type()).to.equal('button');
                    expect(dogGalleryContainer.find('.next-button').type()).to.equal('button');
                    expect(dogGalleryContainer.find('DogGallery').exists()).to.be.true();
                    
                });

            });

        });

        describe('When `currentBreed` contains more than one breed', () => {

            const currentMockBreeds = ['affenpinscher', 'african'];

            beforeEach(() => {
                component = renderComponent({ currentBreed: currentMockBreeds })
            })

            it('should return a `BreedChoice` for each breed in `currentBreed`', () => {

                expect(component.find('li').length).to.equal(currentMockBreeds.length);

            });

        });

    });

});