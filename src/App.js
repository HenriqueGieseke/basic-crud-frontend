import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import CreateUser from './components/pages/create-user/CreateUser';
import RetrieveByName from './components/pages/retrieve-by-name/RetrieveByName';
import RetrieveByRegion from './components/pages/retrieve-by-region/RetrieveByRegion';
import RetrieveRandom from './components/pages/retrieve-random/RetrieveRandom';
import UpdateUser from './components/pages/update-user/UpdateUser';
import DeleteUser from './components/pages/delete-user/DeleteUser';
import Contact from './components/pages/contact/Contact';
import About from './components/pages/about/About';
import Retrieve from './components/pages/retrieve/Retrieve';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/create" exact component={CreateUser} />
          <Route path="/retrieve" exact component={Retrieve} />
          <Route path="/retrieve/byName" exact component={RetrieveByName} />
          <Route path="/retrieve/byRegion" exact component={RetrieveByRegion} />
          <Route path="/retrieve/random" exact component={RetrieveRandom} />
          <Route path="/update" exact component={UpdateUser} />
          <Route path="/delete" exact component={DeleteUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
