import Header from "@/components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-softyellow">Contenido principal</h1>
        <span className="icon icon-burguer"></span>
      </div>
    </main>
    </>
  )
}