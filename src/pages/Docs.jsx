import Header from "../components/Header";
import Footer from "../components/Footer";

const Docs = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <aside className="w-1/4 p-6 bg-gray-900 text-gray-200 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation Index</h2>
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
        <main className="flex-1 p-4 text-gray-800 mt-16">
          <h1 className="text-3xl font-bold mb-6">Mahfuz MERN Stack Tool</h1>
          <div className="mb-4">
            <a href="https://choosealicense.com/licenses/mit/">
              <img
                src="https://img.shields.io/badge/License-MIT-green.svg"
                alt="MIT License"
              />
            </a>
            <a href="https://opensource.org/licenses/">
              <img
                src="https://img.shields.io/badge/License-GPL%20v3-yellow.svg"
                alt="GPLv3 License"
              />
            </a>
            <a href="http://www.gnu.org/licenses/agpl-3.0">
              <img
                src="https://img.shields.io/badge/license-AGPL-blue.svg"
                alt="AGPL License"
              />
            </a>
          </div>

          <section id="description" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p>
              This tool is made to ease the process of making MERN stack apps or
              projects. If you are familiar with the create-react-app tool, then
              you will understand that a MERN Stack Developer has to create
              backend and a frontend directory manually and then install all the
              necessary modules/packages by himself, writing npm i this npm i
              that bla bla. And same for the frontend part. With this tool, you
              can save your time. All you need to do is just install it.
            </p>
          </section>

          <section id="installation" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Installation</h2>
            <p>
              To use this tool, these are the software that you need to install
              first:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>VS Code:</strong> Download it from{" "}
                <a
                  href="https://code.visualstudio.com/download"
                  className="text-blue-600 hover:underline"
                >
                  https://code.visualstudio.com/download
                </a>
              </li>
              <li>
                <strong>Git:</strong> Download it from{" "}
                <a
                  href="https://git-scm.com/downloads"
                  className="text-blue-600 hover:underline"
                >
                  https://git-scm.com/downloads
                </a>
              </li>
              <li>
                <strong>Node.js:</strong> Download it from{" "}
                <a
                  href="https://nodejs.org/en"
                  className="text-blue-600 hover:underline"
                >
                  https://nodejs.org/en
                </a>
              </li>
              <li>
                <strong>MongoDB:</strong> Download it from{" "}
                <a
                  href="https://www.mongodb.com/try/download/community"
                  className="text-blue-600 hover:underline"
                >
                  https://www.mongodb.com/try/download/community
                </a>
              </li>
              <li>
                <strong>Mongo Shell:</strong> Download it from{" "}
                <a
                  href="https://www.mongodb.com/try/download/shell"
                  className="text-blue-600 hover:underline"
                >
                  https://www.mongodb.com/try/download/shell
                </a>
              </li>
              <li>
                <strong>create-react-app tool:</strong> (you need to install it
                globally)
              </li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>npm i create-react-app --location=global</code>
            </pre>
            <p>
              <strong>Nodemon:</strong> (you need to install it globally)
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>npm i nodemon --location=global</code>
            </pre>
            <p>
              <strong>Mahfuz MERN Stack Tool:</strong> (Link given below)
            </p>
            <p>
              Go to{" "}
              <a
                href="https://github.com/mahfuz0712/Mahfuz/releases"
                className="text-blue-600 hover:underline"
              >
                https://github.com/mahfuz0712/Mahfuz/releases
              </a>{" "}
              and download the latest version. Install the setup file. Done.
            </p>
          </section>

          <section id="usage" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Usage</h2>
            <p>
              To create a MERN stack project or app, go to your project folder
              and open the terminal there, and in the terminal type:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>Mahfuz create-mern-app myApp</code>
            </pre>
            <p>
              <em>Replace myApp with the name of your app.</em>
            </p>
            <p>
              Thats it! Now in your VS Code, you can see both backend and
              frontend directories. In the backend directory, there will be
              everything you need for your backend server like express, cors,
              dotenv, cache, nodemon, mongoose, and so much more. You can check
              your package.json file to see the packages that are preinstalled.
              If you need more according to your project, then you can manually
              install those with npm.
            </p>
          </section>

          <section id="other-usage" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Other Usage</h2>
            <p>To check the version, type in your terminal:</p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>Mahfuz show version</code>
            </pre>
            <p>To see the developer information, type in your terminal:</p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>Mahfuz show developer_info</code>
            </pre>
          </section>

          <section id="preinstalled-backend" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Preinstalled Packages For Backend
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>Express JS</li>
              <li>Mongoose</li>
              <li>Cors</li>
              <li>Dotenv</li>
              <li>Ejs</li>
              <li>Cache</li>
              <li>Multer</li>
              <li>Body-Parser</li>
              <li>Bcrypt</li>
              <li>JsonWebToken</li>
            </ul>
            <p>
              These are the packages that are preinstalled with this tool. You
              dont need to install the packages manually. Rather, if you need
              packages that are not listed here, you can install them with npm:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code>npm i PackageName</code>
            </pre>
          </section>

          <section id="preinstalled-frontend" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Preinstalled Packages For Frontend
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>React</li>
              <li>React Router</li>
              <li>React Router DOM</li>
            </ul>
          </section>

          <section id="engineer" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Engineer</h2>
            <p>
              <a
                href="https://www.github.com/mahfuz0712"
                className="text-blue-600 hover:underline"
              >
                Mohammad Mahfuz Rahman
              </a>
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:mahfuzrahman0712@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mahfuzrahman0712@gmail.com
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a
                href="https://fb.com/mahfuzrahman0712"
                className="text-blue-600 hover:underline"
              >
                https://fb.com/mahfuzrahman0712
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/mahfuz0712"
                className="text-blue-600 hover:underline"
              >
                https://github.com/mahfuz0712
              </a>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
