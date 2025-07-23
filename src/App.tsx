import Terminal from "./components/Terminal";

function App() {
  return (
    <main className="grow w-screen sm:max-w-[720px] h-screen sm:max-h-[480px] p-2 border-2 border-neutral-500 rounded-lg">
      <div>
        <Terminal />
      </div>
    </main>
  );
}

export default App;
