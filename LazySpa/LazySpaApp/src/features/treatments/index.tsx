import { useCallback, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { COLORS } from '../../constants';

import { useTreatments } from './hooks';
import { TreatmentCard } from './components';
import { STRINGS } from './strings';
import { styles } from './styles';

const TreatmentsPage = () => {
  const { treatments, error, isError, isLoading } = useTreatments();

  const memoTreatments = useMemo(() => treatments.treatments, [treatments]);

  const renderTreatments = useCallback(() => {
    return (
      <FlatList
        data={memoTreatments}
        renderItem={treatment => <TreatmentCard {...treatment.item} />}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        windowSize={5}
        removeClippedSubviews
      />
    );
  }, [memoTreatments]);

  const renderContent = useCallback(() => {
    if (isError) {
      return <Text style={styles.errorMessage}>{error?.message}</Text>;
    }

    if (isLoading) {
      return (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator color={COLORS.primary} size={'large'} />;
        </View>
      );
    }

    return renderTreatments();
  }, [error, isError, isLoading, renderTreatments]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{STRINGS.TITLE}</Text>
      <Text style={styles.description}>{STRINGS.DESCRIPTION}</Text>
      {renderContent()}
    </View>
  );
};

export { TreatmentsPage };
