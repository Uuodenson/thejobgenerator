import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import './App.css'
import AppRoutes from "./components/nav/routes"

function Cardbar({ header, context, link }) {
  return (
    <Card className="text-center pl-2 pr-2  hover:border-blue-400 hover:border-2">
      <h3>{header}</h3>
      <div className="border-black border-2 h-1 mt-2 mb-2"></div>
      <p className="pb-2">{context}</p>
      <Button onClick={() => window.location.href = link}>Select</Button>
    </Card>
  )
}


function App() {

  return (
    <>
    <div className="bg-slate-100">
      <AppRoutes></AppRoutes>
    </div>
    </>
  )
}

export default App

