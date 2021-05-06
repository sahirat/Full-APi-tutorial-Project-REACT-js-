import Home from './Home';
import './App.css';
import Quotes from './Quotes';

import Jokes from './Jokes';
import { Switch, Route ,Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />

        <Route exact path="/jokes" component={Jokes} />
        <Redirect to="/"  />
      </Switch>

    </>
  );
}

export default App;
