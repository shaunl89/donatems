import React, { useState } from 'react';
import { Button, Text, Image, Overlay } from 'react-native-elements';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../theme';

const MakeADonation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Tops');
  const [selectedOption, setSelectedOption] = useState('image');
  const [imageState, setImageState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);
  const [descriptionState, setDescriptionState] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const displayOption = (option) => {
    switch (option) {
      case 'image':
        return (
          <View>
            <Text h4 style={{ textAlign: 'center' }}>
              Add an Image
            </Text>
            <TouchableOpacity
              style={styles.upload}
              onPress={() => {
                setImageState(!imageState);
              }}
            >
              {imageState ? (
                <Image
                  resizeMode="contain"
                  source={require('../images/Template_Shirt.jpg')}
                  containerStyle={styles.imgContainer}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={require('../images/Target.png')}
                  containerStyle={styles.imgContainer}
                />
              )}
            </TouchableOpacity>
          </View>
        );
      case 'category':
        return (
          <View>
            <Text h4 style={{ textAlign: 'center' }}>
              Choose a Category
            </Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue);
                setCategoryState(true);
              }}
              style={styles.picker}
            >
              <Picker.Item label="Tops" value="Tops" />
              <Picker.Item label="Bottoms" value="Bottoms" />
              <Picker.Item label="Footwear" value="Footwear" />
            </Picker>
          </View>
        );
      case 'description':
        return (
          <View>
            <Text h4 style={{ textAlign: 'center' }}>
              Describe your item
            </Text>
            <TextInput
              style={styles.inputBox}
              multiline
              numberOfLines={10}
              editable
              placeholder="Describe what you are selling and include details such as size and condition that a receiver might be interested in."
              placeholderTextColor="#888888"
              onChangeText={(text) => {
                text ? setDescriptionState(true) : setDescriptionState(false);
              }}
            />
          </View>
        );
    }
  };

  const displayCheck = (check) => {
    if (check) {
      return (
        <Icon
          name="check-circle"
          size={14}
          color={'#006115'}
          style={{ marginBottom: 4 }}
        />
      );
    } else {
      return (
        <Icon
          name="x-circle"
          size={14}
          color={'#da0000'}
          style={{ marginBottom: 4 }}
        />
      );
    }
  };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const resetOptions = () => {
    setCategoryState(false)
    setImageState(false)
    setDescriptionState(false)
    setSelectedLanguage('Tops')
    toggleOverlay()
  }

  const donatedOverlay = () => {
    return (
      <Overlay
        isVisible={overlayVisible}
        onBackdropPress={resetOptions}
        overlayStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay}>
          <View style={styles.overlayText}>
            <Text h4>Thank you!</Text>
          </View>
          <View style={styles.overlayText}>
            <Text>Your item has been listed</Text>
          </View>
          <Button
            title="Dismiss"
            onPress={resetOptions}
            titleStyle={{ fontWeight: 'bold' }}
            buttonStyle={{ backgroundColor: colors.primary }}
          >
          </Button>
        </View>
      </Overlay>
    )
  }

  return (
    <Layout>
      <Header title="Make a Donation" />
      <View style={styles.selection}>{displayOption(selectedOption)}</View>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            setSelectedOption('image');
          }}
        >
          {displayCheck(imageState)}
          <Icon name="image" size={30} />
          <Text h4 h4Style={{ fontSize: 16 }}>
            Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            setSelectedOption('category');
          }}
        >
          {displayCheck(categoryState)}
          <Icon name="align-justify" size={30} />
          <Text h4 h4Style={{ fontSize: 16 }}>
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            setSelectedOption('description');
          }}
        >
          {displayCheck(descriptionState)}
          <Icon name="file-text" size={30} />
          <Text h4 h4Style={{ fontSize: 16 }}>
            Description
          </Text>
        </TouchableOpacity>
      </View>
      {donatedOverlay()}
      <View style={styles.buttonArea}>
        <Button
          title={'List it!'}
          onPress={() => toggleOverlay()}
          titleStyle={{ fontWeight: 'bold' }}
          buttonStyle={{ backgroundColor: colors.primary, borderRadius: 20 }}
          disabled={!descriptionState || !categoryState || !imageState}
        />
      </View>
    </Layout>
  );
};

export default MakeADonation;

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  selection: {
    flexBasis: 'auto',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  upload: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: win.width,
    height: win.width,
    padding: 30,
  },
  imgContainer: {
    width: '100%',
    height: '100%',
  },
  picker: {},
  inputBox: {
    height: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderColor: '#888888',
    overflow: 'visible',
    lineHeight: 20
  },
  options: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1,
    borderColor: '#d8d8d8',
    borderBottomWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  buttonArea: {
    margin: 20,
  },
  overlay: {
    height: 150,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20
  },
  overlayText: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
