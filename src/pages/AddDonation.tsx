import React, { useState } from 'react';
import { Text, Image, Button } from 'react-native-elements';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Picker } from '@react-native-picker/picker';

const MakeADonation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Tops");

  return (
    <Layout>
      <Header title="Make a Donation" />
      <ScrollView>
        <View>
          <Text h4 style={{ textAlign: 'center' }}>
            Add an Image
          </Text>
          <View style={styles.upload}>
            <Image
              resizeMode="contain"
              source={require('../images/Target.png')}
              containerStyle={styles.imgContainer}
            />
          </View>
        </View>
        <View>
          <Text h4 style={{ textAlign: 'center' }}>
            Choose a Category
          </Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={styles.picker}
          >
            <Picker.Item label="Tops" value="Tops" />
            <Picker.Item label="Bottoms" value="Bottoms" />
            <Picker.Item label="Footwear" value="Footwear" />
          </Picker>
        </View>
        <View>
          <Text h4 style={{ textAlign: 'center' }}>
            Describe your item
          </Text>
          <TextInput
            style={styles.inputBox}
            multiline
            numberOfLines={4}
            editable
            placeholder="This is my item"
          />
        </View>
        <View style={styles.buttonArea}>
            <Button title={"Donate my shi(r)t"}/>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default MakeADonation;

const win = Dimensions.get('window');

const styles = StyleSheet.create({
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
  picker: {
  },
  inputBox: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonArea: {
      margin: 20,
  }
});
