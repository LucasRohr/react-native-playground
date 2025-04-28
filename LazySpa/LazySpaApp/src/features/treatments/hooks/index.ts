import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../../../constants';
import { getTreatments } from '../../../services';

import type { UseTreatmentsHookType } from './types';

const useTreatments = (): UseTreatmentsHookType => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_TREATMENTS],
    queryFn: getTreatments,
  });

  return {
    treatments: data ?? { treatments: [] },
    error,
    isError,
    isLoading,
  };
};

export { useTreatments };
