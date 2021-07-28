import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Chip, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const navigation = useNavigation();

  const addRemoveFilters = (name) => {
    filters.includes(name) ?
      setFilters(filters.filter((element) => element !== name)) :
      setFilters([...filters, name])
  }
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <View
          style={styles.chip}
        >
          <Chip
            title="tops"
            type={filters.includes("tops") ? "solid" : "outline"}
            onPress={() => addRemoveFilters("tops")}
          >
          </Chip>
        </View>
        <Chip
          title="bottoms"
          type={filters.includes("bottoms") ? "solid" : "outline"}
          onPress={() => addRemoveFilters("bottoms")}
        >
        </Chip>
      </View>
      <View style={styles.button}>
        <Button
          type="clear"
          icon={
            <Icon name="sliders" size={20} style={{ transform: [{ rotate: "90deg" }] }} />
          }
          onPress={() => navigation.navigate('MyModal')}
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
    marginBottom: 20
  },
  chipContainer: {
    flexDirection: 'row',
  },
  chip: {
    marginRight: 10,
  },
  button: {
    flexShrink: 1,
    alignSelf: 'flex-end',
  },
});
