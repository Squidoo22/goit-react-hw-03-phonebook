const ContactFilter = ({ value, onChange }) => (
  <>
    <div>
      <label htmlFor="filter">Find contacts by name</label>
    </div>
    <input
      type="text"
      id="filter"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </>
);

export default ContactFilter;
