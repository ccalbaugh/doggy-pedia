import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { DogShow } from './DogShow'

describe('Given `DogShow`', () => {

    let component,
        sandbox,
        mockFetchAllBreeds,
        mockFetchCurrentBreedImages;

    const mockBreedImages = [
        "https://dog.ceo/api/img/akita/512px-Ainu-Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Inu_dog.jpg"
    ];

    function requiredProps(overrides = {}) {
        return {
            fetchAllBreeds: mockFetchAllBreeds, 
            fetchCurrentBreedImages: mockFetchCurrentBreedImages,
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
        mockFetchCurrentBreedImages = sandbox.spy();
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

        it('should contain state with `currentBreedImages` set to an empty array', () => {

            expect(component.state().currentBreedImages).to.equal([]);

        });

        it('should contain state with `currentIndex` set to 0', () => {

            expect(component.state().currentIndex).to.equal(0);

        });

        describe('When the currentBreed changes', () => {

            it('should set `currentBreedImages` back to an empty array', () => {

                component = renderComponent({ currentBreed: ['akita'] });

                component.setState({ currentBreedImages: mockBreedImages });

                expect(component.state().currentBreedImages).to.equal(mockBreedImages);

                component.setProps({ currentBreed: ['beagle'] })

                expect(component.state().currentBreedImages).to.equal([]);

            })

        })

        describe('When `currentBreed` contains no breeds', () => {


            it('should show a `span` with a specific class name', () => {

                expect(component.find('.no-breeds-text').type()).to.equal('span');

            });

        });

        describe('When `currentBreed` contains exactly one breed', () => {

            beforeEach(() => {
                component = renderComponent({ currentBreed: ['akita'] });
            })

            it('should dispatch fetchCurrentBreedImages()', () => {

                sinon.assert.notCalled(mockFetchCurrentBreedImages);
                
                component.setProps({ currentBreed: ['beagle'] });     

                sinon.assert.calledOnce(mockFetchCurrentBreedImages);

            });

            it('should contain a `.dog-gallery-container`', () => {

                expect(component.find('.dog-gallery-container').type()).to.equal('div');

            });

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