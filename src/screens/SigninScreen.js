import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Separator, ToggleButton} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Images} from '../constants';
import {Display} from '../utils';

const SigninScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter your Username and Password for sign in. Enjoy your food.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            secureTextEntry={isPasswordShow ? false : true}
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
          <Feather
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      <Text></Text>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.5} />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password
        </Text>
      </View>
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('Signup')}>
          Signup
        </Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
            Connect With Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>Connect With Google</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'POPPINS_MEDIUM',
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'POPPINS_MEDIUM',
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 15,
    fontFamily: 'POPPINS_LIGHT',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: 'POPPINS_MEDIUM',
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: 'POPPINS_BOLD',
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: 'POPPINS_MEDIUM',
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: 'POPPINS_MEDIUM',
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: 'POPPINS_MEDIUM',
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: 'POPPINS_MEDIUM',
    marginLeft: 5,
    alignSelf: 'center',
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: 'POPPINS_MEDIUM',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
