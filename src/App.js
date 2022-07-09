import { useState } from "react";
import DisplayEntries from "./components/DisplayEntries";
import NewEntry from "./components/NewEntry";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "555-5555" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  if (searchTerm) {
    return (
      <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DisplayEntries persons={persons} searchTerm={searchTerm} />
      </div>
    );
  }

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewEntry
        newName={newName}
        setNewName={setNewName}
        persons={persons}
        setPersons={setPersons}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <DisplayEntries persons={persons} searchTerm={searchTerm} />
      ...
    </div>
  );
};

export default App;
