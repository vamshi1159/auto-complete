import './App.css';
import { AutoComplete } from './components/AutoComplete';

function App() {
  const handleChange=(e)=>{
    console.log('handle change')
  }
  return (
    <div className="App" data-testid='app'>
      <AutoComplete handleChange={handleChange}/>
    </div>
  );
}

export default App;
