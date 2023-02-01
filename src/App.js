
import './App.css';
import { ProposalsContextProvider } from './context/ProposalsContext';
import { ProposalsRoutes } from './routes/ProposalsRoutes';

function App() {
  return (
    <ProposalsContextProvider>
      <ProposalsRoutes/>
    </ProposalsContextProvider>

  );
}

export default App;
