import './App.css';
import Weahter from './weather';
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="container">
      <Weahter defaultCity="New York"/>
      <footer>
      this project was coded by <a href="https://github.com/iamfatimarahimi">Fatima Raimi</a> And It's <a href="https://github.com/iamfatimarahimi/weatherapp">open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
