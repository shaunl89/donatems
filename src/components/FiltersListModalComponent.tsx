import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, update } from '../components/filterSlice';
import { allFilters } from '../mocks/all-filters';

const FiltersListModalComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const existingFilters = useSelector(selectFilters);

  useEffect(() => {
    setSelectedFilters(existingFilters)
  }, [existingFilters])

  const addRemoveFilters = (name) => {
    selectedFilters.includes(name) ?
      setSelectedFilters(selectedFilters.filter((element) => element !== name)) :
      setSelectedFilters([...selectedFilters, name])
  }

  return (
    <>
      {allFilters.map((filter, index) => {
        return (
          <CheckBox
            key={index}
            center
            title={filter}
            checked={selectedFilters.includes(filter)}
            onPress={() => addRemoveFilters(filter)}
          />
        )
      })}
      <Button
        title="Confirm"
        onPress={() => {
          dispatch(update(selectedFilters));
          navigation.goBack();
        }}
      />
    </>
  );
}

export default FiltersListModalComponent