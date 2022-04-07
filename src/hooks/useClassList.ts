import { usePortalsContext } from './usePortalsContext';

const useClassList = () => {
  const { state } = usePortalsContext();

  return {
    gymName: state?.gymName,
  }
};

export default useClassList;
