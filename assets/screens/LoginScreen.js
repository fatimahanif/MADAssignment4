import {Text, View, StyleSheet, Pressable} from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>Login and get started</Text>
      </View>
      <View style={styles.contentContainer}>
        <CustomButton
          title="Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.button}
        />
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don't have an account?</Text>
          <Pressable onPress={()=>{navigation.navigate('Register')}}>
            <Text style={{...styles.linkText, textDecorationLine: 'underline'}}>Register Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: '#fff',
    paddingVertical: 35,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomRightRadius: 50,
    elevation: 2.5,
  },
  welcome: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 26,
    color: '#113F67',
    marginVertical: 5,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
  },
  contentContainer: {
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    marginVertical: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 5,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#484848',
    paddingHorizontal: 3,
  }
});

export default LoginScreen;
