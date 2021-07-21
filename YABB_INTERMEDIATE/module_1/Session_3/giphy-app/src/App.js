import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_GIPHY_APP_KEY);
  return (
    <div className="App">
      <h1>Hello Giphy</h1>
    </div>
  );
}

export default App;
