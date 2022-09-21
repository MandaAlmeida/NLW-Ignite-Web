import { ReactNode } from 'react';
import Carousel, {ReactElasticCarouselProps} from 'react-elastic-carousel';




interface SliderProps {
  settings: ReactElasticCarouselProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
   
    <Carousel {...settings}>
      {children}
    </Carousel>
    
  );
}