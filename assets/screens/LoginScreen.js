import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>Login and get started</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.inuptContainer}>
          <TextInput
            style={styles.inupt}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={'#113F6795'}
          />
          <TextInput
            style={styles.inupt}
            placeholder="Password"
            placeholderTextColor={'#113F6795'}
            secureTextEntry
          />
        </View>

        <CustomButton
          title="Login"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.button}
        />

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don't have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{...styles.linkText, textDecorationLine: 'underline'}}>
              Register Now
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    width: '100%',
    borderBottomRightRadius: 50,
    elevation: 2.5,
    height: '25%',
    justifyContent: 'center',
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
  },
  inuptContainer:{
    marginVertical: 10,
  },
  inupt: {
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    elevation: 2,
    borderColor: '#113F67',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    color: '#000',
    marginVertical: 8,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
});

export default LoginScreen;
