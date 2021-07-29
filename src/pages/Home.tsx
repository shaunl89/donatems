import Layout from '../components/Layout';
import Post from '../components/Post';
import React from 'react';
import { allDonations } from '../mocks/all-donations';
import { useSelector } from 'react-redux';
import { selectFilters } from '../components/filterSlice';

const Home = () => {
  const appliedFilters = useSelector(selectFilters);
  const filteredDonations = appliedFilters.length ?
    allDonations.filter((item) => appliedFilters.includes(item.category)) :
    allDonations;

  console.log('filtere', filteredDonations[0].user)
  return (
    <Layout title="Home">
      {filteredDonations.map(({ uri, category, description, user }, index) => (
        <Post uri={uri} category={category} description={description} key={index} user={user} />
      ))}
    </Layout>
  );
};

export default Home;
