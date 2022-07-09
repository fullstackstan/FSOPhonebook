const NewEntry = (props) => {
  let handleNameInputChange = (event) => {
    props.setNewName(event.target.value);
  };

  let handleNumberInputChange = (event) => {
    props.setNewNumber(event.target.value);
  };

  let handleNewEntry = (event) => {
    event.preventDefault();
    let newPerson = { name: props.newName, number: props.newNumber };
    for (let i = 0; i < props.persons.length; i++) {
      if (props.persons[i].name === props.newName) {
        alert(`${props.newName} is already in the phonebook`);
        props.setNewName("");
        props.setNewNumber("");
        return;
      }
    }

    props.setPersons(props.persons.concat(newPerson));
    props.setNewName("");
    props.setNewNumber("");
  };

  return (
    <div>
      <h2>New Phonebook Entry</h2>
      <form onSubmit={handleNewEntry}>
        <div>
          name: <input value={props.newName} onChange={handleNameInputChange} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
