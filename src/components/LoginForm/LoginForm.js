import { useDispatch } from 'react-redux';
import { logIn } from 'reduxFile/auth/operations';
import { ButtonLogin, FormLoginStyled, InputLogin, LabelLogin } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLoginStyled  onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin >
        Email
        <InputLogin type="email" name="email" />
      </LabelLogin>
      <LabelLogin >
        Password
        <InputLogin type="password" name="password" />
      </LabelLogin>
      <ButtonLogin type="submit">Log In</ButtonLogin>
    </FormLoginStyled>
  );
};
