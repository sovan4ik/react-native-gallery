import React, { Component } from 'react';
import { View, StyleSheet, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { connect } from 'react-redux';

import styles from './styles';


class singlePhotoScreen extends Component {
  render() {
    const image = [{
        url: this.props.currentPhoto
    }]
    return (
        <View>
        <Modal style={styles.photo} visible={true} transparent={true}>
        <ImageViewer 
        imageUrls={image}
        enableSwipeDown={true}
        backgroundColor={'white'}
        />
        </Modal>
        </View>
    );
  }
}

const mapStateToProps = state => {
    return {
      currentPhoto: state.galleryReducer.currentPhoto,
    };
};

export default connect(mapStateToProps)(singlePhotoScreen);