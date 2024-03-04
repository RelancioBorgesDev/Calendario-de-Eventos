import { Circle } from "phosphor-react";

export default function DayEvent() {
  return (
    <div className="border-4 border-black rounded-xl flex py-2 gap-8 px-4">
      <Circle className="text-blue-500 " size={64} weight="fill" />
      <div className="w-full flex flex-col gap-2">
        <h1 className="w-full text-lg">
          Dia mundial contra a descriminação racial
        </h1>
        <p className="text-xs">
          Esse dia representa uma causa contra a descriminação racial..
        </p>
        <button className="w-fit bg-blue-500 border-4 border-blue-600 rounded-md text-white p-2 font-bold">
          Gerar Post
        </button>
      </div>
    </div>
  );
}
