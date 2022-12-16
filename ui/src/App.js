import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/shared/AppHeader';
import AppSidebar from './components/shared/AppSidebar';
import Services from './pages/Services';
import Nodes from './pages/Nodes';
import PageNotFound from './pages/PageNotFound';
import ErrorPage from './pages/ErrorPage';
import MaintainancePage from './pages/MaintainancePage';
import ServiceRouters from './pages/ServiceRouters';
import ServiceIntentions from './pages/ServiceIntentions';
import ServiceIntention from './pages/ServiceIntention';
import ServiceRouter from './pages/ServiceRouter';
import NodeDetails from './pages/NodeDetails';
import Consul from './pages/Consul';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div style={{ display: 'flex' }}>
        <AppSidebar />
        <div style={{ flex: '1 auto', float: "left" }}>
          <Router>
            <Routes>
              <Route path="/" element={<Services />} />
              <Route path="services" element={<Services />} />
              <Route path="nodes" element={<Nodes />} />
              <Route path="nodes/:name" element={<NodeDetails />} />
              <Route path="service-routers" element={<ServiceRouters />} />
              <Route path="service-routers/:name" element={<ServiceRouter />} />
              <Route path="service-intentions" element={<ServiceIntentions />} />
              <Route path="service-intentions/:name" element={<ServiceIntention />} />
              <Route path="consul" element={<Consul />} />
              <Route path="something-went-wrong" element={<ErrorPage />} />
              <Route path="under-maintainance" element={<MaintainancePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
