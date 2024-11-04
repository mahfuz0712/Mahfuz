
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import background from "./assets/background.gif";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-gray-200"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <main className="flex-grow flex items-center justify-start pl-16">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
