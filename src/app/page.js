import Header from "@/components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-softyellow">Contenido principal</h1>
        {/* Resto del contenido de la página */}
      </div>
    </main>
    </>
  )
}

