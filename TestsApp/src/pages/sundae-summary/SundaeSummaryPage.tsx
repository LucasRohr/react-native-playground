import React from 'react';
import { View, Text } from 'react-native';
import { SummaryForm } from './components';

const SundaeSummaryPage = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sundae Delivery Page</Text>

        <SummaryForm />
    </View>
);

export default SundaeSummaryPage; 