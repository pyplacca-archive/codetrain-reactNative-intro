import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/please.jpg")} style={styles.image}/>
      <View >
        {
          [
            ['Name', 'David Placca'],
            ['Email', 'email@email.com'],
            ['Gender', 'Male']
          ].map((info, i) => {
            const [title, text] = info
            return (
              <View style={styles.row} key={i}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: "20%",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: '5%',
  },

  row: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: '5%',
  },

  title: {
    marginRight: '5%',
    width: 70,
  },

  text: {
    flexGrow: .6,
    textAlign: 'left',
    alignSelf: 'flex-start'
  }

});
