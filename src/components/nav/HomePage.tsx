import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import Randomizer from "./ranomizer/Ranomzier";

function HomePage() {
  function setAlert(time: number, title: string, description: string) {
    setTimeout(() => {
      const alert = document.getElementById("alert");
      if (alert) {
        alert.remove();
      }
    }, time * 1000);
    return (
      <Alert id="alert" className="w-60 h-20">
        <Terminal></Terminal>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        <Button
          onClick={() => {
            document.getElementById("alert")?.remove();
          }}
        >
          Close
        </Button>
      </Alert>
    );
  }
  function ButtonCard({ title, description = "Description", location }) {
    return (
      <Card className="w-40 h-40">
        <CardTitle className="mb-5 mt-5">{title}</CardTitle>
        <CardDescription className="mb-5 h-5">{description}</CardDescription>
        <CardContent
          onClick={() => {
            window.location.href = location;
          }}
        >
          <Button>Go in!</Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="pb-5 pt-2.5">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <div className="flex flex-wrap flex-row justify-center">
        <ButtonCard
          title="Aufgaben"
          description="Setze neue Aufgaben"
          location="/aufgaben"
        ></ButtonCard>
        <ButtonCard
          title="Leute"
          description="Setze neue Leute"
          location="/people"
        ></ButtonCard>
        <ButtonCard
          title="Ausschließen"
          description="Schließe Leute aus den Aufgaben"
          location="/ausschließen"
        ></ButtonCard>
      </div>
      <Randomizer></Randomizer>
    </div>
  );
}

export default HomePage;
