import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Image } from 'react-native-elements';
import React from 'react';

const Post = ({ uri, category, description }) => {
  return (
    <View>
      <Image
        source={{ uri }}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  category: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  description: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
