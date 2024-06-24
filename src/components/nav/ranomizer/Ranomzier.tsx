import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function Randomizer() {
  const aufgaben = JSON.parse(localStorage.getItem("aufgaben") || "[]");
  const personen = JSON.parse(localStorage.getItem("personen") || "[]");
  return (
    <>
      <Button onClick={() => window.location.reload()}>Ranodmize</Button>
      {aufgaben.map((aufgabe: { name: string }) => {
        const job = JSON.parse(localStorage.getItem(`${aufgabe.name}`)!);
        const personen_array = [];
        while (personen_array.length < 2) {
          const randomPerson =
            personen[Math.floor(Math.random() * personen.length)];
          if (!job.includes(randomPerson)) {
            personen_array.push(randomPerson);
          }
        }
        return (
          <Card>
            <CardTitle>{aufgabe.name}</CardTitle>
            <CardContent>{personen_array}</CardContent>
          </Card>
        );
      })}
    </>
  );
}
