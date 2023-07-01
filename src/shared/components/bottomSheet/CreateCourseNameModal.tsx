import {useCallback, useEffect, useMemo, useRef} from 'react';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import CustomText from '../customComponents/CustomText';
import style from './styles/CreateCourseNameModalStyle';
import CustomTextInput from '../customComponents/CustomTextInput';
import CustomTouchable from '../customComponents/CustomTouchable';

interface Props {
  isState: boolean;
  setIsState: (state: boolean) => void;
  value: string;
  setValue: (val: string) => void;
}

const CreateCourseNameModal = observer(({isState, setIsState, value, setValue}: Props) => {
  const styles = style();
  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '35%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index <= 0) {
      setIsState(false);
    }
  }, []);

  useEffect(() => {
    if (isState) {
      bottomSheetModalRef.current?.snapToIndex(1);
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isState]);

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={0}
      style={styles.container}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.wrap}>
        <CustomText style={styles.title_text}>코스 이름을 지어주세요</CustomText>
        <CustomTextInput keyboardType="web-search" value={value} onChangeText={setValue} style={styles.input} />

        <CustomTouchable style={styles.btn_wrap}>
          <CustomText style={styles.btn_text}>완료</CustomText>
        </CustomTouchable>
      </View>
    </BottomSheet>
  );
});

export default CreateCourseNameModal;
