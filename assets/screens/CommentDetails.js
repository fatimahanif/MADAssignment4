import {Text, View, StyleSheet, Pressable} from 'react-native';
import CustomButton from '../components/CustomButton';

const CommentDetails = ({route, navigation}) => {
  const {comment} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.commentHead}>
          {comment.id}. {comment.name}
        </Text>
        <Text style={styles.commentBody}>Post ID: {comment.postId}</Text>
        <Text style={styles.commentEmail}>{comment.email}</Text>
        <Text style={styles.commentBody}>{comment.body}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Delete"
          onPress={() => {
            fetch(
              `https://jsonplaceholder.typicode.com/comments/${comment.id}`,
              {
                method: 'DELETE',
              },
            )
              .then(response => response.json())
              // .then(json => console.log(json))
              .then(alert('Comment Deleted!'))
              .then(navigation.navigate('Comments'));
          }}
          style={{
            ...styles.button,
            backgroundColor: '#f25e5e',
            borderColor: '#ff0000',
          }}
          textStyle={{color: '#ffffff'}}
        />
        <CustomButton
          title="Update"
          onPress={() => {
            navigation.navigate('Update Comment', {comment: comment});
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  commentHead: {
    fontFamily: 'Nunito-Medium',
    fontSize: 22,
    color: '#113F67',
    textTransform: 'capitalize',
  },
  commentBody: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#000000',
    paddingTop: 5,
  },
  commentEmail: {
    fontFamily: 'Nunito-Medium',
    fontSize: 18,
    color: '#113F67',
    paddingTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  button: {
    width: '30%',
  },
  buttonText: {
    fontFamily: 'Nunito-SemiBold',
  },
});

export default CommentDetails;
