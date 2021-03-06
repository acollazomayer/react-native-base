import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'locale';
import { SIGN_UP_SCREEN } from 'constants/screens';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import styles from './styles';

const LoginScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  useNavigateOnLoginEffect(navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{strings.SIGN_IN.title}</Text>
      <LoginForm onSubmit={loginRequest} />
      <Button title={strings.SIGN_UP.title} onPress={handleLogin} />
    </View>
  );
});

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOption = {
  title: strings.SIGN_IN.title,
};

export default LoginScreen;
