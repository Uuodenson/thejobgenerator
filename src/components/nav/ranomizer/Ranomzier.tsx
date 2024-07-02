import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function Randomizer() {
  const aufgaben = JSON.parse(localStorage.getItem("aufgaben") || "[]");
  const personen = JSON.parse(localStorage.getItem("personen") || "[]");
  return (
    <>
      <Button onClick={() => window.location.reload()} className="mt-3">
        Randomize
      </Button>
      <div className="flex justify-center items-center pt-3">
        {aufgaben.map((aufgabe: { name: string; lenght: number }) => {
          const job = JSON.parse(localStorage.getItem(aufgabe.name) || "[]");
          const lenght = aufgabe.lenght;
          const personen_array: string[] = [];
          if (personen.length <= lenght) {
            for (let i = 0; i < lenght; i++) {
              personen_array.push("Error");
            }
          } else {
            if (job.length >= lenght) {
              for (let i = 0; i < lenght; i++) {
                personen_array.push("Error");
              }
            }
            while (personen_array.length < lenght) {
              const randomPerson =
                personen[Math.floor(Math.random() * personen.length)];
              if (
                !job.includes(randomPerson) &&
                !personen_array.includes(randomPerson)
              ) {
                personen_array.push(randomPerson);
              }
            }
          }
          // localStorage.setItem(`${aufgabe.name}`, JSON.stringify(personen_array));
          return (
            <Card>
              <CardTitle className="pt-5 mb-4">{aufgabe.name}</CardTitle>
              <CardContent className="flex flex-wrap justify-center gap-x-3">
                {personen_array.map((person: string) => {
                  return <p>{person}</p>;
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
