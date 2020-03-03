import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'mario', key: '3'},
    { name: 'luigi', key: '4'},
    { name: 'peach', key: '5'},
    { name: 'toad', key: '6'},
    { name: 'bowser', key: '7'},
  ]);
//bgfhg
  return (
    <View style={styles.container}>
      <FlatList 
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/**Si por ejemplo, cada elemento del array no tiene un "key" y en su
       * lugar tiene otra propiedad que pueda usarse como "key", por ejemplo
       * un "id":
       * { name: 'shaun', id: '1'},
       * { name: 'yoshi', id: '2'},
       * { name: 'mario', id: '3'},
       * 
       * Entoces puede extraerse esa "id" con la propiedad keyExtractor del
       * FlatList:
       * <FlatList 
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
          />

       * Por otro lado puede especificarse el numero de columnas que queremos
       * con FlatList usando la propiedad numColumns. Por ejemplo para dos 
       * columnas usamos numColumns={2}    
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
