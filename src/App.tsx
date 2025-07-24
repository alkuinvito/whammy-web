import WelcomeCommand from "./components/Commands/WelcomeCommand";
import TerminalWindow from "./components/Terminal/TerminalWindow";

function App() {
  return (
    <main className="grow">
      <TerminalWindow defaultMessage={<WelcomeCommand params={[]} />} />
    </main>
  );
}

export default App;
