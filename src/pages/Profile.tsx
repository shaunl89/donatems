import { View, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import React, { useState } from 'react';
import { allUsers } from '../mocks/all-users';
import { Text, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';

const Profile = () => {
  const [user, setUser] = useState(allUsers[2]);

  return (
    <Layout>
      <Header title="Profile" />
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: user.profileImage }}
        />
        <Text h3 h3Style={styles.name}>{user.name}</Text>
        <View>
          <Button
            type="clear"
            title={user.contactNumber}
            disabled
            disabledTitleStyle={{ color: 'gray' }}
            icon={
              <Icon
                name="phone"
                size={20}
                color="gray"
                style={{ paddingRight: 8 }}
              />
            }
          />

          <Button
            type="clear"
            title="Donated: 8"
            disabled
            disabledTitleStyle={{ color: 'gray' }}
            icon={
              <Icon
                name="gift"
                size={20}
                color="gray"
                style={{ paddingRight: 8 }}
              />
            }
          />
          <Button
            type="clear"
            title="Received: 4"
            disabled
            disabledTitleStyle={{ color: 'gray' }}
            icon={
              <Icon
                name="shopping-bag"
                size={20}
                color="gray"
                style={{ paddingRight: 8 }}
              />
            }
          />
        </View>

        <View>
          <Button
            type="clear"
            icon={
              <Icon
                name="share-2"
                size={30}
              />
            }
          >
          </Button>
        </View>

        <View style={styles.logout}>
          <Button
            buttonStyle={{
              paddingHorizontal: 20,
            }}
            type="outline"
            title="Logout"
            onPress={() => console.log('trigger logout')}
          >
          </Button>
        </View>

      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 40,
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 60,
  },
  logout: {
    width: '80%',
    paddingTop: 20
  }
})