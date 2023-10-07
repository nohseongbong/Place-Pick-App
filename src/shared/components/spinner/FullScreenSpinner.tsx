import {useMemo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import style from './styleSheet';

const FullScreenSpinner = () => {
  const styles = useMemo(() => style(), []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'#fff'} />
    </View>
  );
};

export default FullScreenSpinner;
