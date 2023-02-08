import PropTypes from 'prop-types';
import ContactItem from './ContactItem'
import {BtnDelete, ContactList} from './Contacts.styled'


const Contacts = ({filteredContacts, deleteContact }) => {
  let arrayData = filteredContacts();
  const Contact = arrayData.map(({ name, id, number }) =>  
  <ContactItem key={id} id={id} name={name} number={number}><BtnDelete onClick={e => deleteContact(e)}>Delete</BtnDelete></ContactItem>)

  return (
    <ContactList>
      {Contact}
    </ContactList>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;