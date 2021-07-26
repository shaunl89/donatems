import { Text, View } from 'react-native';

import Layout from '../components/Layout';
import Post from '../components/Post';
import React from 'react';
import { allDonations } from '../mocks/all-donations';

const Home = () => {
  return (
    <Layout title="Home">
      {allDonations.map(({ uri, category, description }) => (
        <Post uri={uri} category={category} description={description} />
      ))}
    </Layout>
  );
};

export default Home;
