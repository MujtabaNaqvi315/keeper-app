import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {

  const [notesLst, setNotesLst] = useState([]);

  function addNote (inputText){
    const {title, content} = inputText;
    (title && content) && setNotesLst( prevNotes => [...prevNotes, inputText]);
  }

  function deleteNote (id) {
    setNotesLst( prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className='upper-content'>
        <Header />
        <CreateArea 
          addBtnClick={addNote}
        />
        <div className='notes'>
          {notesLst.map( (note, index) => {
            return <Note 
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              delBtnClick={deleteNote}
            />
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
