import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Chip, Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
import FiltersListModalComponent from "./FiltersListModalComponent";

const Filter = ({reducer, selector}: {reducer, selector: (state: any) => any}) => {
  const navigation = useNavigation();
  const filters = useSelector(selector);
  const dispatch = useDispatch();

  const removeFilters = (name) => {
    dispatch(reducer(filters.filter((element) => element !== name)))
  };

  const filtersPlaceholder = () => {
    return (
      <Text style={styles.placeholder}>Filter by category</Text>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        {!filters.length ? filtersPlaceholder() : filters.map((filter, index) => {
          return (
            <View
              style={styles.chip}
              key={index}
            >
              <Chip
                title={filter}
                type="solid"
                onPress={() => removeFilters(filter)}
                icon={
                  <Icon name="x" size={16} color="white" />
                }
                iconRight
              />
            </View>
          )
        })}
      </View>
      <View style={styles.button}>
        <Button
          type="clear"
          icon={
            <Icon name="sliders" size={20} style={{ transform: [{ rotate: "90deg" }] }} />
          }
          onPress={
            () => navigation.navigate('MyModal', {
              name: 'Filter by',
              component: <FiltersListModalComponent reducer={reducer} selector={selector}/>
            })
          }
        />
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  chip: {
    marginRight: 10,
  },
  button: {
    flexShrink: 1,
    alignSelf: 'flex-end',
  },
  placeholder: {
    fontSize: 16
  }
});
