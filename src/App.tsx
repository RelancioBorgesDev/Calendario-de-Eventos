import React, { useEffect } from "react";
import { Calendar } from "./components/ui/calendar";
import { ptBR } from "date-fns/locale";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { Separator } from "./components/ui/separator";
import ScheduledPost from "./components/scheduled-post";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    if (date) {
      console.log("Aparecer os Eventos");
    }
  }, [date]);
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="w-full h-screen">
        <ResizablePanel defaultSize={15} className="w-1/5 bg-slate-950 ">
          <aside className="">
            <header className="flex items-center flex-col py-4 gap-4">
              <h1 className="text-white text-xl font-bold">Posts Agendados</h1>
              <Separator />
            </header>
            <main className="flex flex-col gap-8 overflow-auto">
              <section className="flex flex-col px-4 gap-4">
                <h2 className="text-gray-500 font-bold  ">Hoje</h2>
                <div className="flex flex-col gap-4">
                  <ScheduledPost post_title="Aniversário Julia" />
                  <ScheduledPost post_title="Dia de São João" />
                </div>
              </section>
              <section className="flex flex-col px-4 gap-4">
                <h2 className="text-gray-500 font-bold  ">Amanhã</h2>
                <div className="flex flex-col gap-4">
                  <ScheduledPost post_title="Aniversário Julia" />
                  <ScheduledPost post_title="Dia de São João" />
                </div>
              </section>
              <section className="flex flex-col px-4 gap-4">
                <h2 className="text-gray-500 font-bold  ">Próxima Semana</h2>
                <div className="flex flex-col gap-4">
                  <ScheduledPost post_title="Aniversário Julia" />
                  <ScheduledPost post_title="Dia de São João" />
                </div>
              </section>
            </main>
          </aside>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60} className="w-3/5 ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            className="w-full h-screen "
            modifiers={{
              friendBirthday: new Date("1990-03-25"),
            }}
          />
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={20} className="w-1/5 ">
          Conteudo 3
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default App;
