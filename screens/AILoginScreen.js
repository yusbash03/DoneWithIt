import React from 'react';
import { View, TextInput, Button, Text, Animated, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const AILoginScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        {/* Your logo component or image here */}
        <Text style={styles.logoText}>Logo</Text>
      </Animated.View>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login" />
          </Animated.View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AILoginScreen;
