import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';
import {AlertContainer} from '@/features/alert';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/layout/Sidebar';


function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Button>Button</Button>
      <AppRoutes />
      <AlertContainer />
    </BrowserRouter>
  );
}

export default App;