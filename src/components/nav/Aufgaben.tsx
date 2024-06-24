import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

import { useEffect, useState } from "react";

function Aufgaben() {
  useEffect(() => {
    setTimeout(() => {
      const aufgaben = localStorage.getItem("aufgaben");
      if (aufgaben) {
        const parsedArray = JSON.parse(aufgaben);
        for (let i = 0; i < parsedArray.length; i++) {
          const newPanel = document.createElement("div");
          ReactDOM.render(
            addWorkPanel(parsedArray[i].name, parsedArray[i].description),
            newPanel
          );
          document?.getElementById("aufgaben").appendChild(newPanel);
        }
      }
    }, 1000); // 2 seconds
  }, []);

  return (
    <div>
      <h1 className="text-5xl mb-4">Aufgaben</h1>
      <p>Hier sind die aufgaben</p>
      <div
        className="flex flex-wrap flex-row justify-center"
        id="aufgaben"
      ></div>
      <InputForm></InputForm>
      <Button
        className="mt-4"
        onClick={() => {
          const storage: Array<{ name: string; description: string }> = [];
          const names = document.querySelectorAll("#name");
          const description = document.querySelectorAll("#description");
          for (let i = 0; i < names.length; i++) {
            storage.push({
              name: names[i].textContent,
              description: description[i].textContent,
            });
            localStorage.setItem("aufgaben", JSON.stringify(storage));
            console.log(localStorage.getItem("aufgaben"));
          }
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default Aufgaben;

const InputForm = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWorkPanel(name, description);
    setName("");
    setDescription("");
  };

  return (
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
      <Button type="submit">Add</Button>
    </form>
  );
};

const addWorkPanel = (name: string, description: string) => {
  const parent = document.getElementById("aufgaben");
  if (parent) {
    const newPanel = document.createElement("div");
    ReactDOM.render(
      <Card className="border-black border-2 p-2 w-60 h-40">
        <h1 className="hover:underline font-bold text-3xl" id="name">
          {name}
        </h1>
        <p className="pb-10" id="description">
          {description}
        </p>
        <Button onClick={() => ReactDOM.unmountComponentAtNode(newPanel)}>
          Remove
        </Button>
      </Card>,
      newPanel
    );
    parent.appendChild(newPanel);
  }
};
