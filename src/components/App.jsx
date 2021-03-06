import React from 'react';
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from '../Note';


function createNote(noteItem) {
    return <Note
        title={noteItem.title} content={noteItem.content} />
}

function App() {
    return (<div>
        <Header />

        {notes.map(createNote)
        }

        <Footer />

    </div>




    )
}

export default App;

