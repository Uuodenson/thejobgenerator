import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
function Out() {
  const [name, setName] = useState("Aufgabe");
  const [arraygabe, setArragabe] = useState<string[]>([]);
  const [next_aufgabe, setNextAufage] = useState(Array<string>);
  function getchosentext() {
    const selectElement = document.getElementById(
      "aufgaben-liste"
    ) as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    setName(selectedOption.value);
    const storedData = localStorage.getItem(name);
    setNextAufage(storedData ? [JSON.parse(storedData)] : []);
    setArragabe(next_aufgabe);
    console.log(arraygabe);
  }

  function chooseaufgaben() {
    return (
      <h1>
        <select name="Aufgaben" id="aufgaben-liste">
          {(
            JSON.parse(localStorage.getItem("aufgaben") || "[]") as Array<{
              name: string;
            }>
          ).map((aufgabe) => (
            <option value={aufgabe.name}>{aufgabe.name}</option>
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
              <Card>
                <CardTitle id={personen}>{personen}</CardTitle>
                <div className="pb-1"></div>
                <Button
                  onClick={() => {
                    if (next_aufgabe.includes(personen)) {
                      setNextAufage(
                        next_aufgabe.splice(next_aufgabe.indexOf(personen), 1)
                      );
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
                  }}
                  onClick={() => {
                    if (!next_aufgabe.includes(personen)) {
                      setNextAufage([...next_aufgabe, personen]);
                      alert("Added");
                    } else {
                      setNextAufage(next_aufgabe.filter((p) => p !== personen));
                      alert("Removed");
                    }
                    // Change button color
                    const button = document.querySelector(
                      `#${personen} button`
                    ) as HTMLButtonElement;
                    button.style.backgroundColor = next_aufgabe.includes(
                      personen
                    )
                      ? "green"
                      : "red";
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
      <Button onClick={getchosentext}>Set</Button>
      {setup()}
      <Button
        onClick={() =>
          localStorage.setItem(`${name}`, JSON.stringify(next_aufgabe))
        }
      >
        Save
      </Button>
      <h1>{next_aufgabe.map((aufgabe) => aufgabe + " ")}</h1>
    </div>
  );
}

export default Out;
