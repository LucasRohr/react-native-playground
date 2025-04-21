import type { TreatmentItemApiInterface, TreatmentItemInterface } from '../../../interfaces';

import { buildEmptyObject } from './build-empty-object';

export const treatmentItemInterfaceFactory = (
  apiObject: TreatmentItemApiInterface,
): TreatmentItemInterface => {
  if (!apiObject) {
    return buildEmptyObject();
  }

  const { id, description, durationInMinutes, image, name } = apiObject;

  return {
    id: id ?? 0,
    description: description ?? '',
    durationInMinutes: durationInMinutes ?? 0,
    image: image?.authorLink ?? '',
    name: name ?? '',
  };
};
