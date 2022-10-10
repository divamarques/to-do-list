import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
    padding: 36,
  },
  input: {
    backgroundColor: '#262626',
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    marginRight: 7,
  },
  button: {
    height: 52,
    width: 52, 
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -65
  }, 
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText: {
    fontWeight: 'bold',
    color: '#4EA8DE',
    marginRight: 12
  },
  numberContainer: {
    backgroundColor: "#3333", 
    borderRadius: 50,
    padding: 4
  },
  counterNumber: {
    color: '#D9D9D9',
    width: 25, 
    height: 19,
    textAlign: 'center'
  }
});