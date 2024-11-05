const Sidebar = () => {
    return (
      <aside className="w-1/4 h-screen p-6 bg-gray-700 text-gray-200 shadow-lg sticky top-10">
        <ul className="space-y-2">
          <li>
            <a
              href="#description"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Description
            </a>
          </li>
          <li>
            <a
              href="#installation"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Installation
            </a>
          </li>
          <li>
            <a
              href="#usage"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Usage
            </a>
          </li>
          <li>
            <a
              href="#other-usage"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Other Usage
            </a>
          </li>
          <li>
            <a
              href="#preinstalled-backend"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Preinstalled Packages For Backend
            </a>
          </li>
          <li>
            <a
              href="#preinstalled-frontend"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Preinstalled Packages For Frontend
            </a>
          </li>
          <li>
            <a
              href="#engineer"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Engineer
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  