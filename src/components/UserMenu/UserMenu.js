import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { logOut } from 'reduxFile/auth/operations';
import { HeaderContainer, LogoutButton, TextWelcome } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <TextWelcome>Welcome, {user.name}</TextWelcome>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </HeaderContainer>
  );
};
