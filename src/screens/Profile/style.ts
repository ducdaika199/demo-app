import { Colors } from 'ahsdk/src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  top: {
    paddingTop: 40,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
  },
  whiteColor: {
    color: '#ffffff',
  },
  titleText: {
    fontSize: 24,
    color: Colors.TextInput,
  },
  textStyle: {
    color: Colors.TextInput,
  },
  itemList: {
    marginVertical: 8,
  },
  textContainer: {
    marginVertical: 20,
  },
});
