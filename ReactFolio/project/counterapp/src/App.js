import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading heading="Increment And Decrement" />
      <Counter/>
    </div> 
  );
}

export default App;
