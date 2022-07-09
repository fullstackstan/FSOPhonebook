let DisplayEntries = (props) => {
  return (
    <div>
      <h2>List of Entries</h2>
      {props.persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default DisplayEntries;
