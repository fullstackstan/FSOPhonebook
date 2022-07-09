let DisplayEntries = (props) => {
  if (props.searchTerm) {
    let filteredPersons = props.persons.filter((person) =>
      person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    );
    return (
      <div>
        <h2>List of Entries</h2>
        {filteredPersons.map((person) => (
          <div key={person.name}>{person.name + " " + person.number}</div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h2>List of Entries</h2>
      {props.persons.map((person) => (
        <div key={person.name}>{person.name + " " + person.number}</div>
      ))}
    </div>
  );
};

export default DisplayEntries;
