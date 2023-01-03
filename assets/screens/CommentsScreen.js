import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import {SpeedDial} from '@rneui/themed';

const CommentsScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        'http://jsonplaceholder.typicode.com/comments',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size={30} color={'#113F67'} />
      ) : (
        <>
          <FlatList
            data={data}
            initialNumToRender={20}
            onRefresh={() => {
              setRefreshing(true);
              alert('refresh');
              setRefreshing(false);
            }}
            refreshing={refreshing}
            renderItem={item => (
              <Pressable
                style={styles.commentContainer}
                onPress={() => {
                  navigation.navigate('Comment Details', {comment: item.item});
                }}>
                <Text style={styles.commentHead}>
                  {item.item.id}. {item.item.name}
                </Text>
                <Text style={styles.commentBody}>{item.item.body}</Text>
              </Pressable>
            )}
          />
          <SpeedDial
            isOpen={open}
            icon={{name: 'edit', color: '#fff'}}
            openIcon={{name: 'close', color: '#fff'}}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            color="#113F67">
            <SpeedDial.Action
              icon={{name: 'add', color: '#fff'}}
              title="Add Comment"
              onPress={() => navigation.navigate('New Comment')}
              color="#113F67"
            />
          </SpeedDial>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15,
  },
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#113F67',
    paddingVertical: 10,
    margin: 5,
  },
  commentHead: {
    fontFamily: 'Nunito-Medium',
    fontSize: 20,
    color: '#113F67',
    textTransform: 'capitalize',
  },
  commentBody: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#000000',
    paddingTop: 5,
  },
});

export default CommentsScreen;
