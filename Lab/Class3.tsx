import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CNMY47E56yUktGuVxYgGXfE4QO6NUyCFEg&s'
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Prateeksha S</Text>
      <Text style={styles.role}>BCA(Hons) Student | RV University</Text>

      

      {/* Skills Info Bubble */}
      <View style={styles.infoBubble}>
        <Text style={styles.infoTitle}>Skills</Text>
        <Text style={styles.infoText}>
          • HTML{'\n'}
          • CSS{'\n'}
          • JavaScript{'\n'}
          • React Native
        </Text>
      </View>
      {/* Projects Bubble */}
      <View style={styles.infoBubble}>
        <Text style={styles.infoTitle}>Projects</Text>
        <Text style={styles.infoText}>
          • Resume App\n
          • To-Do App\n
          • Calculator App'
        </Text>
      </View>

      {/* Education Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Education',
            '• Bachelor’s Degree (Ongoing)\n• Computer Science Coursework'
          )
        }
      >
        <Text style={styles.buttonText}>Education</Text>
      </TouchableOpacity>

      {/* GitHub Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'GitHub Profile',
            'https://github.com/example_prateeksha-s'
          )
        }
      >
        <Text style={styles.buttonText}>GitHub Profile</Text>
      </TouchableOpacity>

      {/* Contact Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Contact Me',
            'Email: prateekshasbca24@rvu.edu.in\nPhone: 123-456-7890'
          )
        }
      >
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d3f2',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 15,
  },
  infoBubble: {
    backgroundColor: '#E6D9F2',
    borderRadius: 10,
    padding: 12,
    width: 260,
    marginVertical: 6,
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#4B1B7A',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#4B1B7A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 6,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
