import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RoutesApp />
      </Router>
    </>
  );
};

export default App;
