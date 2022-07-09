import { useState } from "react";
import DisplayEntries from "./components/DisplayEntries";
import NewEntry from "./components/NewEntry";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <NewEntry
        newName={newName}
        setNewName={setNewName}
        persons={persons}
        setPersons={setPersons}
      />
      <DisplayEntries persons={persons} />
      ...
    </div>
  );
};

export default App;
