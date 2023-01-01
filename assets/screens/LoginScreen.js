import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRe =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const checkInput = () => {
    if (emailRe.test(email) && passwordRe.test(password)) {
      setErrorText('');
      navigation.navigate('Home');
    } else {
      setErrorText('Invalid username or password');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>Login and get started</Text>
      </View>
      <ScrollView style={styles.contentContainer} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.inuptContainer}>
          <TextInput
            style={styles.inupt}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={'#113F6795'}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inupt}
            placeholder="Password"
            placeholderTextColor={'#113F6795'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Text style={styles.errorText}>{errorText}</Text>

        <CustomButton
          title="Login"
          onPress={checkInput}
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
      </ScrollView>
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
    // justifyContent: 'center',
    // flex: 1,
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
  inuptContainer: {
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
  errorText: {
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
