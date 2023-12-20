import { InputSearch, TitleInputSearch } from 'components/FormContact/FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'reduxFile/contacts/filterSlice';

import { selectFilter } from 'reduxFile/contacts/selectors';




 export const Filter =  () => { 
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);

   


    const handleFilterChange = (e) => {
        const { value } = e.target;
        dispatch(filterContacts(value));
      };
    

        return (
            <>
            <TitleInputSearch> Find contacts by name </TitleInputSearch>
            <InputSearch 
            type="text" 
            name="search" 
            value={filterValue} 
            onChange={handleFilterChange} 
            required />
            </>
        );
    }
 
