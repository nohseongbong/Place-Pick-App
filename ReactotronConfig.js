import Reactotron from 'reactotron-react-native';
import {mst} from 'reactotron-mst';
import EncryptedStorage from 'react-native-encrypted-storage';

Reactotron.configure().setAsyncStorageHandler(EncryptedStorage).configure().useReactNative(mst).connect();
