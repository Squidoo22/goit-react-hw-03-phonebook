import React, { Component } from 'react';
import Section from './components/Section';
import ContactsForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactFilter from './components/ContactFilter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    if (this.isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: uuidv4(), name, number };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  isInContacts = name => {
    name = name.toLowerCase();
    return (
      this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(name),
      ).length > 0
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactsForm
            options={this.state}
            onSubmit={this.addContact}
          ></ContactsForm>
        </Section>
        <Section title="Contacts">
          <ContactFilter onChange={this.changeFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </>
    );
  }
}

export default App;
