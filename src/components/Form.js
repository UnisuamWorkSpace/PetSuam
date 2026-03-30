import { TextInput, View, Text, StyleSheet} from 'react-native';

export default function Form({h1, h2, h3}) {
    return (
        <>
            <Text style={styles.h1}>{h1}</Text>
            <Text style={styles.h2}>{h2}</Text>
            <Text style={styles.h3}>{h3}</Text>
        </>

    );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 18
  }
});