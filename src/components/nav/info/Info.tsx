import AufgabenImage from "../../../assets/Aufgaben.png";
import LeuteImage from "../../../assets/Leute.png";
import OutImage from "../../../assets/Out.png";

import { Card, CardTitle, CardContent } from "@/components/ui/card";

function Info() {
  return (
    <>
      <Card className="block m-auto">
        <CardTitle>Tutorial</CardTitle>
        <CardContent>
          <img src={AufgabenImage} alt="Aufgaben" />
          <h1>
            Setze die aufgaben in dem du den Namen und die Description den Input
            hinzufügst
          </h1>
          <img src={LeuteImage} alt="Leute" />
          <h1>
            Setze die Leute in dem du den Namen und die Description den Input
            hinzufügst
          </h1>
          <img src={OutImage} alt="Out" />
          <h1>
            Schließe die Leute aus der Aufgabe indem du sie Addest oder wenn sie
            vorhanden sind, sie Removst
          </h1>
        </CardContent>
      </Card>
    </>
  );
}

export default Info;
