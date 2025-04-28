import { Image, Text, View } from 'react-native';

import { TreatmentItemInterface } from '../../../../interfaces';

const TreatmentCard = (treatment: TreatmentItemInterface) => {
  const { name, description, durationInMinutes, image: imageUri } = treatment;

  return (
    <View>
      <Text>
        {name} - {durationInMinutes} min
      </Text>
      <Text>{description}</Text>
      <Image style={{ height: 100, width: 100 }} source={{ uri: imageUri }} />
    </View>
  );
};

export { TreatmentCard };
