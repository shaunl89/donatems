import { Text, View } from 'react-native';
import Layout from '../components/Layout';
import React from 'react';
import { allUsers } from '../mocks/all-users';

const Profile = () => {
  return (
    <Layout title="Profile">
      <View>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          quam, recusandae quidem sed consectetur nulla voluptate repudiandae
          quod aperiam veritatis voluptatibus maiores nostrum id nam est.
          Quibusdam provident animi numquam.
        </Text>
      </View>
    </Layout>
  );
};

export default Profile;
