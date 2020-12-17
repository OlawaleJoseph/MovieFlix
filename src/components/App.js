import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './NavBar';
import HomePage from '../pages/HomePage';
import VideoPage from '../pages/VideoPage';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie" component={VideoPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
