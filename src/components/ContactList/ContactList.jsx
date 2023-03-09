import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useGetContactsQuery } from '../../redux/contactsApi';

export const ContactList = ({ onDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const { data } = useGetContactsQuery();
  console.log(data);

  const visibleContact = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, phone }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {phone}</span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
