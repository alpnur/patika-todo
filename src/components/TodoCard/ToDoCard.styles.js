import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#38474e',
    flex: 1,
    borderRadius: 30,
    padding: 10,
  },
  input_container: {
    flex: 1,
    borderWidth: 2,
    borderBottomColor: '#7b8e98',
    borderTopColor: '#38474e',
    borderLeftColor: '#38474e',
    borderRightColor: '#38474e',
  },
  button_container: {
    flex: 1,
    padding: 5,
  },
  todo_input: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  save_button: {
    flex: 1,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#808080',
  },
  save_button_text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    padding: 6,
  },
});
