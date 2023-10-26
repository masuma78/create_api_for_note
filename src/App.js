import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";


const App = () => {
	
	return (
		<div className="App">
      <NoteForm />  
      <NoteList />
		</div>
	);
};

export default App;
