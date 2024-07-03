import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

function Out() {
  const [name, setName] = useState("Aufgabe");
  const [next_aufgabe, setNextAufage] = useState<string[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(name);
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setNextAufage(parsedData);
  }, [name]);

  function chooseaufgaben() {
    return (
      <h1>
        <select
          name="Aufgaben"
          id="aufgaben-liste"
          onChange={(e) => setName(e.target.value)}
          value={name}
        >
          <option value="Aufgabe">Aufgabe</option>
          {(
            JSON.parse(localStorage.getItem("aufgaben") || "[]") as Array<{
              name: string;
            }>
          ).map((aufgabe) => (
            <option key={aufgabe.name} value={aufgabe.name}>
              {aufgabe.name}
            </option>
          ))}
        </select>
      </h1>
    );
  }

  function setup() {
    const aufgaben = JSON.parse(localStorage.getItem("aufgaben") || "[]");
    const foundAufgabe = aufgaben.find(
      (aufgabe: { name: string }) => aufgabe.name === name
    );
    if (foundAufgabe) {
      return (
        <>
          <div className="flex flex-wrap flex-row justify-center">
            <div id="aufgaben-div" className="flex flex-wrap flex-row"></div>
            {(
              JSON.parse(localStorage.getItem("personen") || "[]") as string[]
            ).map((personen: string) => (
              <Card key={personen}>
                <CardTitle id={personen}>{personen}</CardTitle>
                <div className="pb-1"></div>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                  onClick={() => {
                    if (next_aufgabe.includes(personen)) {
                      setNextAufage(next_aufgabe.filter((p) => p !== personen));
                      alert("Removed");
                    }
                  }}
                >
                  Remove
                </Button>
                <Button
                  style={{
                    backgroundColor: next_aufgabe.includes(personen)
                      ? "green"
                      : "red",
                    color: "white",
                  }}
                  onClick={() => {
                    if (!next_aufgabe.includes(personen)) {
                      setNextAufage([...next_aufgabe, personen]);
                      alert("Added");
                    } else {
                      setNextAufage(next_aufgabe.filter((p) => p !== personen));
                      alert("Removed");
                    }
                  }}
                >
                  Add
                </Button>
                <div className="pb-3"></div>
              </Card>
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-start">
        <Button onClick={() => window.history.back()}>Back</Button>
      </div>
      {chooseaufgaben()}
      <div id="closeout">{setup()}</div>
      <Button
        onClick={() =>
          localStorage.setItem(`${name}`, JSON.stringify(next_aufgabe))
        }
      >
        Save
      </Button>
    </div>
  );
}

export default Out;
