import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';
import {AlertContainer} from '@/features/alert';


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <AlertContainer />
    </BrowserRouter>
  );
}

export default App;