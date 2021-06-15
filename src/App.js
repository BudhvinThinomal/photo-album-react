import AlbumsTitle from "./component/AlbumsTitle";
import PhotoCollection from "./component/PhotoCollection";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/album">
            <PhotoCollection />
          </Route>
          <Route path="/">
            <AlbumsTitle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
