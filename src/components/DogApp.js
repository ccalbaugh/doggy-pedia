import React from 'react'
import DogSearchForm from './DogSearchForm'
import DogShow from './DogShow'


function DogApp() {
    return (
        <main className="DogApp">
            <DogSearchForm />
            <DogShow />
        </main>
    );
}

export default DogApp;