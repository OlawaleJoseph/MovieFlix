import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './NavBar';
import HomePage from '../pages/HomePage';
// eslint-disable-next-line import/no-named-as-default
import VideoPage from '../pages/VideoPage';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <div className="App max-width">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie" component={VideoPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
