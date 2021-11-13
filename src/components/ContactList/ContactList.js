import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = { contacts: PropTypes.array };

export default ContactList;
