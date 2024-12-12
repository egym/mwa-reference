import useLatestActivityWidgetPage from './hooks/useLatestActivityWidgetPage';
import LatestActivityWidgetPage from './LatestActivityWidgetPage';

const LatestActivityWidgetPageContainer = () => {
  const result = useLatestActivityWidgetPage();

  return <LatestActivityWidgetPage {...result} />;
};

export default LatestActivityWidgetPageContainer;
