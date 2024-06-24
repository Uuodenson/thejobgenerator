import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card";
import Randomizer from "./ranomizer/Ranomzier";

function HomePage() {
  const navigate = useNavigate();

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
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
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
    </div>
  );
}

export default HomePage;
