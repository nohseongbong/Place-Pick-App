import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import style from './search.style';
import {searchStore} from '../../../features/home/store/searchStore';
import CustomTextInput from '../customComponents/CustomTextInput';
import CustomTouchable from '../customComponents/CustomTouchable';
import SvgComponent from '../SvgComponent/SvgComponent';

const Search = observer(() => {
  return (
    <View style={style.container}>
      <View style={style.search_bar_wrap}>
        <View style={style.search_text_wrap}>
          <CustomTouchable style={style.search_btn}>
            <SvgComponent isDefault icon="search" width={16} height={16} />
          </CustomTouchable>
          <CustomTextInput
            style={style.search_input}
            keyboardType="web-search"
            placeholder="가고 싶은 장소를 검색해보세요"
            onSubmitEditing={searchStore.fetchGoogleSearchPlace}
            value={searchStore.searchText}
            onChangeText={searchStore.setSearchText}
          />
        </View>
      </View>
    </View>
  );
});

export default Search;
