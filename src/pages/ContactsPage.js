import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { fetchContacts } from "reduxFile/contacts/operations";
import { selectContacts } from "reduxFile/contacts/selectors";
import { ListContacts } from "components/ListContact/ListContact";
import { FormContacts } from "components/FormContact/FormContact";
import { ContainerDivPhonebook, Message, TitleContacts, TitlePhonebook } from "components/FormContact/FormContacts.styled";


const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);


    const contacts = useSelector(selectContacts);
    return (
        
        
          
            <ContainerDivPhonebook>
                <TitlePhonebook>Phonebook</TitlePhonebook>
                <FormContacts />
                <TitleContacts>Contacts</TitleContacts>
                <Filter />
                {contacts.length > 0 ? <ListContacts /> : <Message> You have not added any contacts</Message>}
               
            </ContainerDivPhonebook>
    
    )
};

export default ContactsPage;


