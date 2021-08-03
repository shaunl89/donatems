import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Content';
import Filter from '../components/Filter';
import { selectSelectionFilters, updateSelectionFilters } from '../components/filterSlice';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { mySelection } from '../mocks/donations';


const MySelections = () => {
  const appliedFilters = useSelector(selectSelectionFilters);
  const filteredDonations = appliedFilters.length ?
    mySelection.filter((item) => appliedFilters.includes(item.category)) :
    mySelection;

  return (
    <Layout>
      <Header title="My Selection" />
      <Filter reducer={updateSelectionFilters} selector={selectSelectionFilters} />
      <Content>
        {filteredDonations.map(({ uri, category, description, giver, status }, index) => (
          <Post
            uri={uri}
            category={category}
            description={description}
            key={index}
            giver={giver}
            status={status}
          />
        ))}
      </Content>
    </Layout>
  );
};

export default MySelections;
