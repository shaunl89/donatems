import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Image } from 'react-native-elements';
import React from 'react';

const Post = ({ uri, category, description, user }) => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{ uri: user.profileImage }}
          style={styles.profileImg}
        />
        <Text>{user.name}</Text>
      </View>
      <Image
        source={{ uri }}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.category}>
        Category:
        <Text style={styles.bold}>
          {" " + category}
        </Text>
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Post;

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
    width: '100%',
    height: 300,
    marginBottom: 20,
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
});
