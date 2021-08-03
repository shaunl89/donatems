import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import React from 'react';
import { Status } from '../types';
import { showStatusOverlay } from '../components/showStatusOverlay';
import { showButtons } from '../components/showButtons';
import ContactDetails from './ContactDetails';

const Post = ({ uri, category, description, giver = null, receiver = null, showUser = true, status = Status.AVAILABLE }) => {
  return (
    <View>
      {showUser &&
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={{ uri: giver.profileImage }}
            style={styles.profileImg}
          />
          <Text>{giver.name}</Text>
        </View>
      }
      <View style={styles.imageWrapper}>
        <Image
          source={uri}
          containerStyle={styles.img}
          resizeMode={'contain'}
          PlaceholderContent={<ActivityIndicator />}
        />
        {status === Status.CONTACT && (receiver && ContactDetails(receiver) || giver && ContactDetails(giver))}

        {/* {showStatusOverlay(status)} */}
      </View>
      <Text style={styles.category}>
        Category:
        <Text style={styles.bold}>
          {" " + category}
        </Text>
      </Text>
      <Text style={styles.description}>{description}</Text>
      {showButtons(status)}
    </View>
  );
};

export default Post;

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  img: {
    width: win.width,
    height: win.width,
    flex: 1,
    alignSelf: 'stretch',
  },
  category: {
    paddingHorizontal: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "gray",
  },
  bold: {
    color: "black",
  },
  description: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  imageWrapper: {
    position: "relative",
    width: win.width,
    height: win.width,
    marginBottom: 20,
  },
  placeOverlay: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
