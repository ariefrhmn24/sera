import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList,
  Dimensions
} from 'react-native';
import _ from 'lodash';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

function Search() {
  const [dataListDefault] = useState([
    { id: 1, title: 'Programming dengan Swift'},
    { id: 2, title: 'Program pencarian'},
    { id: 3, title: 'Bahasa Pemprograman'},
    { id: 4, title: 'Buat Project baru'}
  ]);
  const [dataList, setDataList] = useState([]);
  const [search, setSearch] = useState('');

  function onTyping(v: string) {
    setSearch(v);
    let filterData = _.filter(dataListDefault, function (o) {
      return (_.result(o, 'title', '').toLowerCase()).includes(v.toLowerCase());
    });
    setDataList(filterData);
  }

  useEffect(() => {
  }, []);

  const renderItem = ({item, index}: any) => {
    return (
      <View key={index}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={{ flexDirection: 'row' }} 
          placeholder='Pencarian...' 
          onChangeText={_.debounce((v) => onTyping(v), 1000, {
            trailing: false,
            leading: true,
          })} 
        />
      </View>
      { search.length > 3 ? (
        <FlatList
          data={search.length > 3 ? dataList : []}
          renderItem={renderItem}
          keyExtractor={(i: any, index: number) => index.toString()}
          ListEmptyComponent={
            <View>
              <Text style={styles.searchText}>Kata pencarian tidak ditemukan</Text>
            </View>
          }
        />
      ) : (
        <View>
          <Text style={styles.searchText}>Masukkan kata pencarian</Text>
        </View>
      )}
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  searchContainer: {
    width: ScreenWidth - 30,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 5,
    marginBottom: 10
  },
  searchText: {
    color: 'grey',
  }
});