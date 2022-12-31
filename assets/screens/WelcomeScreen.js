import {Text, Image, View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.welcome}>Welcome to Comments Manager!</Text>
      <CustomButton
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.button}
      />
      <CustomButton
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 140,
    alignSelf: 'center',
  },
  welcome: {
    fontFamily: 'Nunito-Bold',
    fontSize: 26,
    color: '#113F67',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

export default WelcomeScreen;
