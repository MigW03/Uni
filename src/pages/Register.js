import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
  TextInput,
  ToastAndroid,
  Keyboard,
  Modal,
} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  function registerWithEmail() {
    if (email.length > 0 && password.length > 0) {
      Keyboard.dismiss();
      setModalOpen(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          ToastAndroid.show('Usuário criado com sucesso', ToastAndroid.SHORT);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            return (
              setModalOpen(false),
              Alert.alert(
                'Usuário existente',
                'Um usuário com esse e-mail já existe',
              ),
              setEmail(''),
              setPassword('')
            );
          }

          if (error.code === 'auth/invalid-email') {
            return (
              setModalOpen(false),
              Alert.alert(
                'E-mail inválido',
                'Esse e-mail é inválido, tente outro',
              ),
              setEmail(''),
              setPassword('')
            );
          }

          if (error.code === 'auth/network-request-failed') {
            return (
              setModalOpen(false),
              Alert.alert(
                'Sem conexão',
                'Parece que o seu aparelho não está conectado à rede, conecte-se e tente novamente',
              )
            );
          }

          if (error.code === 'auth/weak-password') {
            return (
              setModalOpen(false),
              Alert.alert(
                'Senha fraca',
                'A sua senha deve ter pelo menos 6 caracteres',
              ),
              setPassword('')
            );
          }
          setModalOpen(false);
          Alert.alert(
            'Erro',
            'Houve um problema ao criar a sua conta, por favor tente novamente!',
          );
        });
    } else {
      Alert.alert(
        'Campos obrigatórios',
        'Você precisa completar todos os campos acima antes de prosseguir com essa ação.',
      );
    }
  }

  async function googleLogin() {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return await auth()
        .signInWithCredential(googleCredential)
        .then(() => {
          ToastAndroid.show('Usuário criado com sucesso', ToastAndroid.SHORT);
        });
    } catch (error) {
      console.log({error});
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2a64bb" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Initial')}>
          <Icon name="arrow-back" size={26} color="#f9f9f9" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastro</Text>
      </View>

      <View style={styles.emailLogin}>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Digite seu e-mail:</Text>
          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Crie uma senha:</Text>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            value={password}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={registerWithEmail}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.loginTouch} onPress={registerWithEmail}>
          <Text style={styles.loginText}>Criar conta</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Ou</Text>

      <TouchableOpacity
        onPress={() =>
          googleLogin().then(() => console.log('Fez login com google'))
        }
        style={styles.googleTouch}>
        <GoogleIcon name="google" size={24} color="#f9f9f9" />
        <Text style={styles.googleTouchText}>Use sua conta Google</Text>
      </TouchableOpacity>

      <Modal
        visible={modalOpen}
        animationType="fade"
        transparent
        statusBarTranslucent>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#3473d1" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3473d180',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '12%',
    width: '100%',
    paddingHorizontal: 12,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f9f9f9',
    marginHorizontal: 8,
  },
  inputView: {
    marginBottom: 20,
  },
  inputTitle: {
    color: '#f9f9f9',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: '10%',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    paddingLeft: 14,
    width: '85%',
    alignSelf: 'center',
    elevation: 8,
    fontSize: 18,
  },
  loginTouch: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3473d1',
    borderRadius: 12,
    elevation: 8,
    marginBottom: 15,
    padding: 10,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  orText: {
    fontSize: 16,
    color: '#f5f5f5',
    alignSelf: 'center',
    marginBottom: 15,
  },
  googleTouch: {
    flexDirection: 'row',
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#dd5656',
    borderRadius: 8,
    elevation: 7,
  },
  googleTouchText: {
    color: '#F9f9f9',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
  forgotTouch: {
    alignSelf: 'center',
    marginTop: 8,
  },
  forgotText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    color: '#202020',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000085',
  },
});
