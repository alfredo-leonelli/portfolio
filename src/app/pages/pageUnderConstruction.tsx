export default function PageUnderConstruction() {
  return (
    <div>
      <div className="flex space-x-2 justify-center items-center bg-white h-[60vh] dark:invert">
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
      <h1 className="text-4xl font-bold font-mono text-center">
        Página en desarrollo
      </h1>
    </div>
  );
}
