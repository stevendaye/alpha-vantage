import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import { Layout } from './layout';
import { Home } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
