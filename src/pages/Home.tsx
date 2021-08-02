import Layout from '../components/Layout';
import Post from '../components/Post';
import React from 'react';
import { allDonations } from '../mocks/donations';
import { useSelector } from 'react-redux';
import { selectHomeFilters, updateHomeFilters } from '../components/filterSlice';
import Header from '../components/Header';
import Content from '../components/Content';
import Filter from '../components/Filter';

const Home = () => {
  const appliedFilters = useSelector(selectHomeFilters);
  const filteredDonations = appliedFilters.length ?
    allDonations.filter((item) => appliedFilters.includes(item.category)) :
    allDonations;

  return (
    <Layout>
      <Header title="Home" showChopes={true} />
      <Filter reducer={updateHomeFilters} selector={selectHomeFilters}/>
      <Content>
        {filteredDonations.map(({ uri, category, description, user, status }, index) => (
          <Post uri={uri} category={category} description={description} key={index} user={user} status={status}/>
        ))}
      </Content>
    </Layout>
  );
};

export default Home;
