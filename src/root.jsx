import { Canvas } from "@react-three/fiber"
import { Hero } from "./components/Hero"
import { Header } from "./assets/cards/standart/Header"

export default function Root() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
    </div>
  )
}

