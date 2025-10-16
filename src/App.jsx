import { NewForm } from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <main className="relative min-h-screen bg-[url(https://tinyurl.com/28s7wecz)] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content on top */}
      <div className="relative z-10 container mx-auto p-8 flex flex-col items-center">
        <Header />
        <NewForm />
      </div>
    </main>
  );
}

export default App;
