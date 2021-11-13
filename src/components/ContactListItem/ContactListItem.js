import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.listItem}>
      <p>
        {name}: {number}
      </p>{' '}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
