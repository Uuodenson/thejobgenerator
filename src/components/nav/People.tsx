import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardHeader } from "../ui/card";
const People: React.FC = () => {
  const [personen, setPersonen] = useState<string[]>([]);

  useEffect(() => {
    const storedPersonen = localStorage.getItem("personen");
    if (storedPersonen) {
      setPersonen(JSON.parse(storedPersonen));
    }
  }, []);

  const addPerson = (name: string) => {
    setPersonen([...personen, name]);
  };

  const removePerson = (name: string) => {
    setPersonen(personen.filter((person) => person !== name));
  };

  const handleSave = () => {
    localStorage.setItem("personen", JSON.stringify(personen));
  };

  return (
    <div>
      <div className="flex justify-start">
        <Button onClick={() => window.history.back()}>Back</Button>
      </div>
      <h1>Hier kannst du personen hinzufügen oder entfernen lassen</h1>
      <Card id="personen" className="flex flex-row flex-wrap justify-center">
        {personen.map((person) => (
          <Card key={person} id="person">
            <CardHeader>{person}</CardHeader>
            <Button onClick={() => removePerson(person)}>Entfernen</Button>
          </Card>
        ))}
      </Card>
      <Input type="text" placeholder="Name hinzufügen" />
      <Button
        onClick={() =>
          addPerson(
            (document.querySelector('input[type="text"]') as HTMLInputElement)
              .value
          )
        }
      >
        Hinzufügen
      </Button>
      <Button onClick={handleSave}>Speichern</Button>
    </div>
  );
};

export default People;
