import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MarkdownRenderer from '../components/MarkdownRenderer';

const Docs = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-16">
        <Sidebar />
        <div className="flex-1 max-w-4xl w-full py-8">
          <MarkdownRenderer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
