import { useQuery } from 'react-query';

const fetchLocations = async () => {
  const res = await fetch('https://egymidp.netpulse.com/np/company/children');
  return res.json();
};

const useLocations = () => {
  const locationsQuery = useQuery('children', fetchLocations);

  return {
    locationsQuery,
  };
};

export default useLocations;
