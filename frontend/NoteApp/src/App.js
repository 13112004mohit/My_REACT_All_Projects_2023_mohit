import React, { useContext, useReducer } from 'react';
import Nav from './components/Nav';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import NotesContext from './context';
import notesReducer from './reducer';

function App() {
  // const initialState = useContext(NotesContext);
  const initialState = {
    currentNote: null,
    notes: [
      { id: 1, text: 'Do homework' },
      { id: 2, text: 'Take out trash' },
      { id: 3, text: 'Clean room' }
    ]}
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}

export default App;
