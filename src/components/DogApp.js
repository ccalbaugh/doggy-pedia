import React, { Component } from 'react'
import DogSearchForm from './DogSearchForm'
import DogShow from './DogShow'
import DogWiki from './DogWiki'


class DogApp extends Component {
    render() {
        return (
            <main className="dog-app">
                <DogSearchForm />
                <DogShow />
                <DogWiki />
            </main>
        );
    }
}

export default DogApp;