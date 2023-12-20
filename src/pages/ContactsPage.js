import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { fetchContacts } from "reduxFile/contacts/operations";
import { selectContacts } from "reduxFile/contacts/selectors";
import { ListContacts } from "components/ListContact/ListContact";
import { FormContacts } from "components/FormContact/FormContact";


const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);


    const contacts = useSelector(selectContacts);
    return (
        
        
          
            <div>
        
                <h2>Phonebook</h2>
                <FormContacts />
                <h2>Contacts</h2>
                <Filter />
                {contacts.length > 0 ? <ListContacts /> : <b>you have not added contacts</b>}
                <ListContacts />
        
            </div>
    
    )
};

export default ContactsPage;