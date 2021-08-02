import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Content';
import Filter from '../components/Filter';
import { selectDonationFilters, updateDonationFilters } from '../components/filterSlice';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { myDonation } from '../mocks/donations';


const MyDonations = () => {
  const appliedFilters = useSelector(selectDonationFilters);
  const filteredDonations = appliedFilters.length ?
    myDonation.filter((item) => appliedFilters.includes(item.category)) :
    myDonation;

  return (
    <Layout>
      <Header title="My Donations"/>
      <Filter reducer={updateDonationFilters} selector={selectDonationFilters}/>
      <Content>
        {filteredDonations.map(({ uri, category, description, user }, index) => (
          <Post uri={uri} category={category} description={description} key={index} user={user} />
        ))}
      </Content>
    </Layout>
  );
};

export default MyDonations;
