// components
import {Image, View} from 'react-native';

// images
import {IMG} from '../../../assets/images';
import style from './card.style';
import {useState} from 'react';
import {wt} from '../../../lib/responsiveSize';

interface Props {
  imgUri: string;
  size: number;
}

function ImageCard({imgUri, size}: Props) {
  const [currentImage, setCurrentImage] = useState({uri: imgUri});

  const handleError = () => {
    setCurrentImage(IMG.default_img);
  };

  return (
    <View style={[style.image_container, {width: wt(size), height: wt(size)}]}>
      <Image
        style={[style.image_wrap]}
        source={currentImage}
        onError={handleError}
      />
    </View>
  );
}

export default ImageCard;
