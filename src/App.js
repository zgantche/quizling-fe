import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderMenu from './components/HeaderMenu';
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* include header things here */}
        </header>
        <HeaderMenu />
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
