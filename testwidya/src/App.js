import logo from './logo.svg';
import './App.css';
import Registrasi from './component/Registrasi';
import Login from './component/Login';
import Lupa from './component/Lupa';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Registrasi} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/lupa" component={Lupa} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
