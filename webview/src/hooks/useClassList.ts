import { ClassItem } from '../utils/data';

const useClassList = () => {

  const onClassItemClick = (classDetails: ClassItem) => {
    console.log('class item click', classDetails);
    if (window.AndroidInteractor?.onClassItemClick) {
      window.AndroidInteractor?.onClassItemClick(classDetails.id);
    }
  }

  const gymName = window.AndroidInteractor?.gymName;

  return {
    onClassItemClick,
    gymName
  }
};

export default useClassList;
