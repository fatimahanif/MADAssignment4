import {Text, Pressable, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{...styles.button, ...props.style}}>
      <Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '60%',
    padding: 8,
    borderColor: '#113F67',
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: '#113F6720',
    elevation: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: '#113F67',
  },
});

export default CustomButton;
