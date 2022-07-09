const NewEntry = (props) => {
  let handleNameInputChange = (event) => {
    props.setNewName(event.target.value);
  };

  let handleNewEntry = (event) => {
    event.preventDefault();
    let newPerson = { name: props.newName };
    for (let i = 0; i < props.persons.length; i++) {
      if (props.persons[i].name == props.newName) {
        alert(`${props.newName} is already in the phonebook`);
        props.setNewName("");
        return;
      }
    }

    props.setPersons(props.persons.concat(newPerson));
    props.setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewEntry}>
        <div>
          name: <input value={props.newName} onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
