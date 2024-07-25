import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';
import CreateArea from './components/CreateArea';

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      {notes.map(note => (
        <Note 
          key = {note.id}
          title = {note.title}
          content = {note.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
