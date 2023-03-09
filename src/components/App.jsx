import './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useGetContactsQuery } from './../redux/contactsApi';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { isLoading, isSuccess } = useGetContactsQuery();

  return (
    <div style={{ padding: '10px' }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {isSuccess && <ContactList />}
    </div>
  );
};
