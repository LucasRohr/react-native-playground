export type TreatmentItemImageApiInterface = {
  fileName?: string;
  authorName?: string;
  authorLink?: string;
  platformName?: string;
  platformLink?: string;
};

export type TreatmentItemApiInterface = {
  id?: number;
  name?: string;
  durationInMinutes?: number;
  image?: TreatmentItemImageApiInterface;
  description?: string;
};

export type TreatmentsApiInterface = TreatmentItemApiInterface[];
