
import './App.css';
import { ProposalsContextProvider } from './context/ProposalsContext';
import { ProposalsRoutes } from './routes/ProposalsRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <ProposalsContextProvider>
      <ProposalsRoutes/>
    </ProposalsContextProvider>

  );
}

export default App;
