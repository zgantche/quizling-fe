import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/createQuiz">Create a New Quiz</Link></li>
          </ul>
        </header>
        <body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/createQuiz">
              <CreateQuiz />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
