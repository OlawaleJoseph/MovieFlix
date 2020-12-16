import Banner from './Banner';
import Navbar from './NavBar';
import MovieRow from '../containers/MovieRow';

const a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quibusdam culpa porro fuga error cupiditate sit quis vel fugiat voluptatum alias nam reprehenderit obcaecati nulla aliquid mollitia accusantium sint corporis! Nisi nihil doloribus, aspernatur aut animi consequuntur commodi';
const img = 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
// const img2 = 'https://images.unsplash.com/photo-1607977293847-0257817e60c1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const App = () => (
  <div className="App">
    <Navbar />
    <Banner desc={a} bgImg={img} />
    <MovieRow title="Trending" />
  </div>
);

export default App;
