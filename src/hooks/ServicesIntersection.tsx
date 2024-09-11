import { useRef } from 'react';
import useIntersectionObserver from './IntersectionObserver';

const useServicesIntersection = (services: any[]) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const serviceRefs = services.map(() => useIntersectionObserver({ threshold: 0.25 }));

  return serviceRefs;
};

export default useServicesIntersection;
