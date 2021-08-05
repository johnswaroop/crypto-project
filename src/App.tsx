import { FC } from 'react';
import Nav from './components/Nav';
import Home from './routes/Home';

const routes: string[] = ['Swap', 'Pool', 'Migrate', 'Farm'];

const App: FC = () => {
  return (
    <div className="App">
      <Nav routes={routes} activeRoute={routes[0]} />
      <Home></Home>
    </div>
  );
}

export default App;
