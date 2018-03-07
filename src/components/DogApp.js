import React, { Component } from 'react'
import DogSearchForm from './DogSearchForm'
import DogShow from './DogShow'
import DogWiki from './DogWiki'


function DogApp() {
    return (
        <main className="dog-app">
            <DogSearchForm />
            <DogShow />
            <DogWiki />
        </main>
    );
}

export default DogApp;