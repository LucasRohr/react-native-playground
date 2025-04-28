import { TreatmentsInterface } from '../../../interfaces';

export type UseTreatmentsHookType = {
  treatments: TreatmentsInterface;
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
};
