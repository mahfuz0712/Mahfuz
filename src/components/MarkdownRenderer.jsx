const MarkdownRenderer = () => {
  return (
    <div className="ml-1/4 p-4 text-white flex-1 mt-3">
      <h1 className="text-3xl font-bold mb-6">
        Mahfuz Js Software Engineering Tool
      </h1>
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

      <div id="description" className="mb-8 mt-20">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>
          This tool is made to ease the process of making MERN stack apps or
          projects and python apps also. If you are familiar with the
          create-react-app tool, then you will understand that a MERN Stack
          Developer has to create backend and a frontend directory manually and
          then install all the necessary modules/packages by himself, writing
          npm i this npm i that bla bla. And same for the frontend part. With
          this tool, you can save your time and for the python app development
          there are a lots of packages that you need to install and create a
          virtual environment and then write code and all that but with this
          tool you will not have to start from scratch. A simple GUI interface
          will be automatically created; all you will have to do is just edit the
          app according to your needs and then build the app so to make your
          easier with this all you need to do is just install it.
        </p>
      </div>

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
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://code.visualstudio.com/download
            </a>
          </li>
          <li>
            <strong>Git:</strong> Download it from{" "}
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://git-scm.com/downloads
            </a>
          </li>
          <li>
            <strong>Node.js:</strong> Download it from{" "}
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://nodejs.org/en
            </a>
          </li>
          <li>
            <strong>MongoDB:</strong> Download it from{" "}
            <a
              href="https://www.mongodb.com/try/download/community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.mongodb.com/try/download/community
            </a>
          </li>
          <li>
            <strong>Mongo Shell:</strong> Download it from{" "}
            <a
              href="https://www.mongodb.com/try/download/shell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.mongodb.com/try/download/shell
            </a>
          </li>
          <li>
            <strong>Python:</strong> Download it from{" "}
            <a
              href="https://python.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://python.org
            </a>
          </li>
          <li>
            <strong>Nodemon:</strong> (you need to install it globally)
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              <code className="text-gray-600">
                npm i nodemon --location=global
              </code>
            </pre>
          </li>
          <li>
            <strong>Mahfuz MERN Stack Tool:</strong> (Link given below)
            <p>
              Go to{" "}
              <a
                href="https://github.com/mahfuz0712/Mahfuz/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://github.com/mahfuz0712/Mahfuz/releases
              </a>{" "}
              and download the latest version. Install the setup file. Done.
            </p>
          </li>
        </ul>
      </section>

      <section id="usage" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Usage</h2>
        <p>
          To create a MERN stack project or app, go to your project folder and
          open the terminal there, and in the terminal type:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-gray-600">mahfuz create-mern-app myApp</code>
        </pre>
        <p>
          <em>Replace myApp with the name of your app.</em>
        </p>
        <p>
          Thats it! Now in your VS Code, you can see both backend and frontend
          directories. In the backend directory, there will be everything you
          need for your backend server like express, cors, dotenv, cache,
          nodemon, mongoose, and so much more. You can check your package.json
          file to see the packages that are preinstalled. If you need more
          according to your project, then you can manually install those with
          npm.
        </p>
      </section>

      <section id="other-usage" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Other Usage</h2>
        <p>To check the version, type in your terminal:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-gray-600">Mahfuz show version</code>
        </pre>
        <p>To see the developer information, type in your terminal:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-gray-600">Mahfuz show developer_info</code>
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
          <li>Json Web Token</li>
        </ul>
      </section>

      <section id="preinstalled-frontend" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Preinstalled Packages For Frontend
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>React</li>
          <li>React Router DOM</li>
          <li>React Icons</li>
          <li>Axios</li>
          <li>Bootstrap</li>
          <li>React Bootstrap</li>
          <li>React Redux</li>
          <li>Redux Toolkit</li>
        </ul>
      </section>

      <section id="support" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Support</h2>
        <p>If you have any queries or questions, feel free to contact:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: mahfuzrahman0712@gmail.com</li>
          <li>GitHub: https://github.com/mahfuz0712/mahfuz</li>
        </ul>
      </section>

      <section id="license" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">License</h2>
        <p>
          This project is licensed under the MIT License - see the{" "}
          <a
            href="https://choosealicense.com/licenses/mit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            license file
          </a>{" "}
          for details.
        </p>
      </section>
    </div>
  );
};

export default MarkdownRenderer;
