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

const UpdateComment = ({route, navigation}) => {
  const emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const nameRe = /^[\w ]{2,}$/;
  const bodyRe = /^[\w ]{10,}$/m;

  const {comment} = route.params;

  const [name, setName] = useState(comment.name);
  const [email, setEmail] = useState(comment.email);
  const [postId, setPostId] = useState(JSON.stringify(comment.postId));
  const [body, setBody] = useState(comment.body);
  const [errorText, setErrorText] = useState('');

  const checkInput = () => {
    if (postId > 100 || postId < 1) {
      setErrorText('Incorrect post id');
    } else if (!emailRe.test(email)) {
      setErrorText('Invalid email');
    } else if (!nameRe.test(name)) {
      setErrorText('Name must be at least 2 characters long!');
    } else if (!bodyRe.test(body)) {
      setErrorText('Body must be at least 10 characters long!');
    } else {
      setErrorText('');
      fetch(`https://jsonplaceholder.typicode.com/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          email: email,
          postId: postId,
          body: body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        // .then(response => response.json())
        // .then(json => console.log(json))
        .then(alert('Comment Updated'))
        .then(navigation.navigate('Comments'));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.inuptContainer}>
          <TextInput
            style={styles.inupt}
            placeholder="Name"
            placeholderTextColor={'#113F6795'}
            value={name}
            onChangeText={setName}
          />
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
            placeholder="Post ID"
            placeholderTextColor={'#113F6795'}
            value={postId}
            onChangeText={setPostId}
          />
          <TextInput
            style={styles.inupt}
            placeholder="Body"
            placeholderTextColor={'#113F6795'}
            value={body}
            onChangeText={setBody}
            numberOfLines={4}
            multiline={true}
          />
        </View>

        <Text style={styles.errorText}>{errorText}</Text>

        <CustomButton
          title="Update Comment"
          onPress={checkInput}
          style={styles.button}
        />
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

export default UpdateComment;
