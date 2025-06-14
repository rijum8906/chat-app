import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Typography } from '@/components/ui/typography';

const NotFoundComponent = () => {
  return (
    <div className="w-full h-full">
      <div className="md:absolute flex flex-col mx-auto w-fit text-center mt-[300px] md:top-1/2 md:m-0 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 gap-4 md:gap-7">
        <Typography variant="h1">404 Page Not Found</Typography>
        <Typography variant="h3">The Page you are looking for doesn't exists.</Typography>
        <Link to="/">
          <Button variant="outline">Go To Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
