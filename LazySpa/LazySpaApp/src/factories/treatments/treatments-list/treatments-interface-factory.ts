import type { TreatmentsApiInterface, TreatmentsInterface } from '../../../interfaces';
import { treatmentItemInterfaceFactory } from '../treatment-item/treatment-item-interface-factory';

import { buildEmptyObject } from './build-empty-object';

export const treatmentsInterfaceFactory = (
  apiObject: TreatmentsApiInterface,
): TreatmentsInterface => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const treatmentsApiList = apiObject;

  return {
    treatments: treatmentsApiList.map(treatmentItemInterfaceFactory),
  };
};
