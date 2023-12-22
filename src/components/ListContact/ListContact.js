

import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete, ItemContact } from '../FormContact/FormContacts.styled'
import { deleteContact } from 'reduxFile/contacts/operations';
import { selectVisibleContacts } from 'reduxFile/contacts/selectors';

export const ListContacts = () => {
const dispatch = useDispatch();

const filteredContacts = useSelector(selectVisibleContacts);

const handleDelete = (contactId) => {

  dispatch(deleteContact(contactId))};
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ItemContact 
        key={contact.id}>
          {contact.name} : {contact.number}{''} 
          <ButtonDelete type="button" onClick={() => handleDelete(contact.id)}>
            Delete
            </ButtonDelete>
            </ItemContact>
        
      ))}
      
    </ul>
  );
};


