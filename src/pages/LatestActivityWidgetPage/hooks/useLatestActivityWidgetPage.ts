import { useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';
import useLatestActivities from '../../../hooks/useLatestActivities/useLatestActivities';
import useRefreshDashboardWidget from '../../../hooks/useRefreshDashboardWidget';
import { useStore } from '../../../store';
import {
  getAppLanguageSelector,
  getIsEgymAccountLinkedSelector,
  getWidgetPreferencesSelector,
} from '../../../store/selectors';
import { routeUrls } from '../../../utils/constants';
import { publishSetWidgetHeight, requestOpenFeature } from '../../../utils/nativeHandlers/requests';
import { queryKeys } from '../../../utils/queryKeys';
import type { UseLatestActivityWidgetPageResultProps } from '../LatestActivityWidgetPageProps';

const useLatestActivityWidgetPage = (): UseLatestActivityWidgetPageResultProps => {
  const [language] = useStore(getAppLanguageSelector);
  const [widgetPreferences] = useStore(getWidgetPreferencesSelector);
  const [egymAccountLinked] = useStore(getIsEgymAccountLinkedSelector);
  const { latestActivitiesQuery } = useLatestActivities();
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  useRefreshDashboardWidget({
    onRefresh: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.latestActivities,
      });

      setTimeout(() => {
        if (contentRef.current?.offsetHeight) {
          publishSetWidgetHeight({
            height: contentRef.current?.offsetHeight,
          });
        }
      }, 100);
    },
  });

  const title = useMemo(() => {
    if (widgetPreferences.localizedTitle) {
      const locale = language.split('-')[0];
      return widgetPreferences.localizedTitle[locale] || t('workoutsHistory.widget.title');
    }

    return t('workoutsHistory.widget.title');
  }, [language, t, widgetPreferences.localizedTitle]);

  const viewAllClick = useCallback(() => {
    requestOpenFeature({
      startingRoute: routeUrls.home,
    });
  }, []);

  const shouldShowLogWorkoutButton = useMemo(() => {
    return Boolean(widgetPreferences?.showLogWorkoutButton);
  }, [widgetPreferences?.showLogWorkoutButton]);

  const isEmptyState = useMemo(() => {
    return !egymAccountLinked || (!latestActivitiesQuery.data?.length && !latestActivitiesQuery.isLoading);
  }, [egymAccountLinked, latestActivitiesQuery.data?.length, latestActivitiesQuery.isLoading]);

  const handleLogWorkoutClick = useCallback(() => {
    requestOpenFeature({
      startingRoute: routeUrls.home,
    });
  }, []);

  return {
    title,
    latestWorkoutsHistory: latestActivitiesQuery.data || [],
    isLoading: latestActivitiesQuery.isLoading,
    shouldShowLogWorkoutButton,
    viewAllClick,
    isEmptyState,
    handleLogWorkoutClick,
    contentRef,
  };
};

export default useLatestActivityWidgetPage;
