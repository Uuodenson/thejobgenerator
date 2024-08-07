import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import Randomizer from "./ranomizer/Ranomzier";
import Info from "./info/Info";

function HomePage() {
  const navigate = useNavigate();
  const [showtutorial, setShowTutorial] = useState(
    ((localStorage.getItem("showtutorial") || "") as string) === ""
      ? false
      : JSON.parse(localStorage.getItem("showtutorial") as string)
  );

  useEffect(() => {
    localStorage.setItem("showtutorial", JSON.stringify(showtutorial));
  }, [showtutorial]);

  function ButtonCard({
    title,
    description = "Description",
    location,
  }: {
    title: string;
    description?: string;
    location: string;
  }) {
    return (
      <Card className="w-40 h-40">
        <CardTitle className="mb-5 mt-5">{title}</CardTitle>
        <CardDescription className="mb-5 h-5">{description}</CardDescription>
        <CardContent
          onClick={() => {
            navigate(location);
          }}
        >
          <Button>Go in!</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="pb-5 pt-2.5">
      <h1 className="text-4xl">Group Work Randomizer</h1>
      <label>
        <input
          type="checkbox"
          checked={!showtutorial}
          onChange={() => setShowTutorial(!showtutorial)}
        />
        Show Tutorial
      </label>
      <div className="flex flex-wrap flex-row justify-center">
        <ButtonCard
          title="Aufgaben"
          description="Setze neue Aufgaben"
          location="aufgaben"
        />
        <ButtonCard
          title="Leute"
          description="Setze neue Leute"
          location="people"
        />
        <ButtonCard
          title="Ausschließen"
          description="Schließe Leute aus den Aufgaben"
          location="ausschließen"
        />
      </div>
      <Randomizer />
      {!showtutorial && <Info />}
    </div>
  );
}

export default HomePage;
