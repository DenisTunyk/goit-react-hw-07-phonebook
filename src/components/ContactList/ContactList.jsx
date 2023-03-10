import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { useDeleteContactsMutation } from '../../redux/contactsApi';

export const ContactList = ({ onDelete }) => {
  const filter = useSelector(getFilter);
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  const { data } = useGetContactsQuery();

  const visibleContact = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, phone }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {phone}</span>
          <button onClick={() => deleteContacts(id)}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};
