import type { TreatmentItemInterface } from '../../../interfaces';

export const buildEmptyObject = (): TreatmentItemInterface => {
  return {
    id: 0,
    name: '',
    durationInMinutes: 0,
    image: '',
    description: '',
  };
};
