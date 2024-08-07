import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function Aufgaben() {
  const [aufgaben, setAufgaben] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on initial render
    const loadAufgaben = () => {
      const storedAufgaben = localStorage.getItem("aufgaben");
      if (storedAufgaben) {
        setAufgaben(JSON.parse(storedAufgaben));
      }
    };
    setTimeout(loadAufgaben, 1000); // Delayed load for demonstration
  }, []);

  const addAufgabe = (
    name: string,
    description: string,
    lenght: number = 1
  ) => {
    setAufgaben(
      (prevAufgaben) =>
        [...prevAufgaben, { name, description, lenght } as never] as never[]
    );
  };
  // Fix TypeScript error: Argument of type '(prevAufgaben: never[]) => { name: string; description: string; }[]' is not assignable to parameter of type 'SetStateAction<never[]>'.

  const removeAufgabe = (name: string) => {
    const filteredAufgaben = aufgaben.filter(
      (aufgabe: { name: string }) => aufgabe.name !== name
    );
    setAufgaben(filteredAufgaben);
  };

  return (
    <div>
      <div className="flex flex-row justify-start">
        <Button onClick={() => window.history.back()}>Back</Button>
      </div>
      <div>
        <h1 className="text-5xl mb-4">Aufgaben</h1>
      </div>
      <p>Hier sind die Aufgaben</p>
      <div className="flex flex-wrap flex-row justify-center" id="aufgaben">
        {aufgaben.map(
          (aufgabe: { name: string; description: string; lenght: number }) => (
            <div key={aufgabe.name}>
              <Card
                className="border-black border-2 p-2 w-60 h-40"
                id={aufgabe.name}
              >
                <h1
                  id="name"
                  className="hover:underline font-bold text-3xl name"
                >
                  {aufgabe.name}
                </h1>
                <p id="description" className="pb-10 description">
                  {aufgabe.description}
                </p>
                <input
                  type="number"
                  className="border-black border-2 w-20"
                  value={aufgabe.lenght}
                  id="lenght"
                  defaultValue={aufgabe.lenght}
                  onChange={(e) =>
                    setAufgaben(
                      aufgaben.map(
                        (currentAufgabe: {
                          name: string;
                          description: string;
                          lenght: number;
                        }) =>
                          currentAufgabe.name === aufgabe.name
                            ? {
                                ...currentAufgabe,
                                lenght: Number(e.target.value),
                              }
                            : currentAufgabe
                      ) as never
                    )
                  }
                />
                <Button onClick={() => removeAufgabe(aufgabe.name)}>
                  Remove
                </Button>
              </Card>
            </div>
          )
        )}
      </div>
      <InputForm addAufgabe={addAufgabe} />
      <Button onClick={saveAufgaben}>Save</Button>
    </div>
  );
}

function saveAufgaben() {
  const names = document.querySelectorAll("#name");
  const descriptions = document.querySelectorAll("#description");
  const lenghts = document.querySelectorAll("#lenght");
  const aufgaben: { name: string; description: string; lenght: string }[] = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent as string;
    const description = descriptions[i].textContent as string;
    const lenght = Number((lenghts[i] as HTMLInputElement).value).toString();
    aufgaben.push({ name, description, lenght });
  }
  localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}

const InputForm = ({
  addAufgabe,
}: {
  addAufgabe: (name: string, description: string, lenght: number) => void;
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lenght, setLenght] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAufgabe(name, description, lenght);
    setName("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
        <input
          type="text"
          className="border-black border-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="border-black border-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          className="border-black border-2 w-20"
          value={lenght}
          id="lenght"
          onChange={(e) => setLenght(Number(e.target.value))}
        />
        <Button type="submit">Add</Button>
      </form>
      <div className="flex flex-wrap justify-center gap-x-3">
        <p>Aufgaben</p>
        <p>Description</p>
      </div>
    </>
  );
};

export default Aufgaben;
