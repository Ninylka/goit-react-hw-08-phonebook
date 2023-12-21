
import { useAuth } from 'hooks';
import { NavLinkContacts, NavLinkHome } from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkHome  to="/">
        Home
      </NavLinkHome>
      {isLoggedIn && (
        <NavLinkContacts  to="/contacts">
          Contacts
        </NavLinkContacts>
      )}
    </nav>
  );
};


