import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/AppRoutes';
import NotificationContainer from '@/features/notification/components/NotificationContainer';
import { useNotification } from '@/features/notification/hooks/useNotification';
import { Button } from '@/components/ui/button';

function App() {
  const { showNotification } = useNotification();
  
  const onClick = () => {
    console.log('hi');
    showNotification({
      content: "jldi se to prchi na ho to Vet to the ground should be some options like this ",
      link: "https://xhamster.com"
    })
  }

  return (
    <BrowserRouter>
      <Button onClick={onClick}>
        Click Me
      </Button>
      <AppRoutes />
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
