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
        "https://dog.ceo/api/img/akita/Akita_Inu_dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_inu_blanc.jpg",
        "https://dog.ceo/api/img/akita/An_Akita_Inu_resting.jpg",
        "https://dog.ceo/api/img/akita/Japaneseakita.jpg",
        "https://dog.ceo/api/img/akita/512px-Akita_inu.jpeg"
    ];

    const initialState = {
        currentBreedImages: [],
        imagesToPass: [],
        currentIndex: 0
    };

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
        component.setState(initialState)
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

        it('should contain state with `imagesToPass` set to an empty array', () => {

            expect(component.state().imagesToPass).to.equal([]);

        });

        it('should contain state with `currentIndex` set to 0', () => {

            expect(component.state().currentIndex).to.equal(0);

        });

        describe('When the currentBreed changes', () => {

            beforeEach(() => {
                component = renderComponent({ currentBreed: ['akita'] });
            })

            it('should set `currentBreedImages` back to an empty array', () => {

                component.setState({ currentBreedImages: mockBreedImages });

                expect(component.state().currentBreedImages).to.equal(mockBreedImages);

                component.setProps({ currentBreed: ['beagle'] })

                expect(component.state().currentBreedImages).to.equal([]);

            });

            it('should set `currentIndex` back to 0', () => {

                component.setState({ currentIndex: 5 });

                expect(component.state().currentIndex).to.equal(5);

                component.setProps({ currentBreed: ['beagle'] })

                expect(component.state().currentIndex).to.equal(0);

            });

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

                describe('When the `currentIndex` is 0', () => {

                    describe('And the `currentIndex` is not within 3 of the length of currentBreedImages', () => {

                        beforeEach(() => {
                            component.setState({ currentIndex: 0, currentBreedImages: mockBreedImages });
                        })

                        it('should disable the `.previous-button`', () => {

                            const dogGalleryContainer = component.find('.dog-gallery-container');

                            expect(dogGalleryContainer.find('.previous-button').props().disabled).to.be.true();                    
        
                        });
    
                        it('should enable the `.next-button`', () => {

                            const dogGalleryContainer = component.find('.dog-gallery-container');                                                
    
                            expect(dogGalleryContainer.find('.next-button').props().disabled).to.be.false();                    
        
                        });

                    });

                    describe('And the `currentIndex` is within 3 of the length of currentBreedImages', () => {

                        it('should disable the `.previous-button` and the `.next-button`', () => {

                            const dogGalleryContainer = component.find('.dog-gallery-container');

                            expect(dogGalleryContainer.find('.previous-button').props().disabled).to.be.true();                    
                            expect(dogGalleryContainer.find('.next-button').props().disabled).to.be.true();                    
        
                        });

                    });

                });

                describe('When the `currentIndex` is not 0 and is within 3 of the length of `currentBreedImages`', () => {

                    beforeEach(() => {
                        component.setState({ currentIndex: 5, currentBreedImages: mockBreedImages });
                    })

                    it('should enable the `.previous-button`', () => {

                        const dogGalleryContainer = component.find('.dog-gallery-container');
    
                        expect(dogGalleryContainer.find('.previous-button').props().disabled).to.be.false();                    
    
                    });

                    it('should disable the `.next-button`', () => {

                        const dogGalleryContainer = component.find('.dog-gallery-container');                        
    
                        expect(dogGalleryContainer.find('.next-button').props().disabled).to.be.true();                    
    
                    });

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