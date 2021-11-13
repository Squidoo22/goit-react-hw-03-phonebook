import styles from './ContactForm.module.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  randomNameId = uuidv4();
  randomNumberId = uuidv4();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.fieldInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.randomNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.label}>
          Number:
          <input
            className={styles.fieldInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="+380 (00) 000-00-00"
            id={this.randomNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
