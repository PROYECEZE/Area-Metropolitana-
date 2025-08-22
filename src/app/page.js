import Navbar from "@/components/Navbar";
import { rubik } from "@/fonts/font";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <div className="container mx-auto p-4">
        <h1 className={`${rubik.className} text-2xl font-bold text-red-900`}>Contenido principal</h1>
      </div>
    </main>
    </>
  )
}