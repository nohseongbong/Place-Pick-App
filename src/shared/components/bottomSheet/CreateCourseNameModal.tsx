import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import BottomSheet from '@gorhom/bottom-sheet';

import CustomText from '../customComponents/CustomText';
import style from './styles/CreateCourseNameModalStyle';
import CustomTextInput from '../customComponents/CustomTextInput';
import CustomTouchable from '../customComponents/CustomTouchable';

interface Props {
  isState: boolean;
  setIsState: (state: boolean) => void;
  value: string;
  setValue: (val: string) => void;
  complete: () => void;
}

const CreateCourseNameModal = observer(({isState, setIsState, value, setValue, complete}: Props) => {
  const styles = style();
  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '35%'], []);
  const [isKeyboard, setIsKeyboard] = useState<boolean>(false);

  const handleSheetChanges = useCallback((index: number) => {
    if (index <= 0) {
      setIsState(false);
    }
  }, []);
  const showKeyboard = () => {
    setIsKeyboard(true);
  };
  const hideKeyboard = () => {
    setIsKeyboard(false);
  };

  const onPressComplete = () => {
    complete();
  };

  useEffect(() => {
    if (isState) {
      bottomSheetModalRef.current?.snapToIndex(1);
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isState]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', showKeyboard);
    Keyboard.addListener('keyboardDidHide', hideKeyboard);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={0}
      style={styles.container}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={[styles.wrap, isKeyboard && styles.wrap_padding]}>
        <CustomText style={styles.title_text}>코스 이름을 지어주세요</CustomText>
        <CustomTextInput keyboardType="web-search" value={value} onChangeText={setValue} style={styles.input} />

        <CustomTouchable onPress={onPressComplete} style={styles.btn_wrap}>
          <CustomText style={styles.btn_text}>완료</CustomText>
        </CustomTouchable>
      </View>
    </BottomSheet>
  );
});

export default CreateCourseNameModal;
