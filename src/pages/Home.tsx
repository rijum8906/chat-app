import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const HomeComponent = () => {
  const { toggleSidebar } = useSidebar();

  const handleClick = () => toggleSidebar();

  return (
    <>
      <Button onClick={handleClick}>toggleSidebar</Button>
    </>
  );
};

export default HomeComponent;
