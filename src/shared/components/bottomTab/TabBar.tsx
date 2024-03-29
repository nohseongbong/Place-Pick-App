import React from 'react';
import {View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import {palette} from '../../constants/palette';
import style from './tabBarStyle';
import CustomTouchable from '../customComponents/CustomTouchable';
import {SVG_IMG} from '../../../assets/images';
import CustomText from '../customComponents/CustomText';
import {collectionStore} from '../../../features/collection/store/collectionStore';
import DeleteBar from '../../../features/collection/components/collection-list/DeleteBar';
import {authStore} from '../../store/authStore';
import {SCREEN_NAME} from '../../constants/navigation';

const TabBar = observer(
  ({state, descriptors, navigation}: BottomTabBarProps) => {
    const styles = style();

    return collectionStore.isEdit ? (
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          width: '100%',
        }}>
        <DeleteBar />
      </View>
    ) : (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (
              !authStore.accessToken &&
              route.name === SCREEN_NAME.COLLECTION
            ) {
              authStore.setIsLoginModal(true);
              return;
            }

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <CustomTouchable
              key={route.key}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.icon}>
              {label === '코스 만들기' ? (
                isFocused ? (
                  <SVG_IMG.HOME_ON width={20} height={20} />
                ) : (
                  <SVG_IMG.HOME_OFF width={20} height={20} />
                )
              ) : isFocused ? (
                <SVG_IMG.COLLECTION_ON width={20} height={20} />
              ) : (
                <SVG_IMG.COLLECTION_OFF width={20} height={20} />
              )}
              <CustomText
                style={[
                  styles.icon_text,
                  !isFocused && {color: palette.BORDER},
                ]}>
                {String(label)}
              </CustomText>
            </CustomTouchable>
          );
        })}
      </View>
    );
  },
);

export default TabBar;
