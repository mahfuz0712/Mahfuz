
const Hero = () => {
  const downloadLatest = async (e) => {
    e.preventDefault();
    const token = import.meta.env.VITE_API_TOKEN; // Use environment variable
    const repo = "mahfuz0712/Mahfuz";

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo}/releases/latest`,
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const exeAsset = data.assets.find((asset) => asset.name.endsWith(".exe"));

      if (exeAsset) {
        window.location.href = exeAsset.browser_download_url;
      } else {
        alert("Nothing found for download.");
      }
    } catch (error) {
      console.error("Error fetching the latest release:", error);
      alert("Could not fetch the latest version. Please try again later.");
    }
  };

  return (
    <section className="flex flex-col items-start max-w-3xl text-left px-6 py-16 md:flex-row md:text-left md:px-12 md:items-start md:justify-start">
      <div className="hero-text">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Build Anything With Mahfuz Js
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Mahfuz JS is a free, open-source tool <br /> that lets developers
          create amazing websites and desktop apps.
        </p>
        <a
          href="#"
          onClick={downloadLatest}
          className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
        >
          Download Mahfuz JS
        </a>
      </div>
    </section>
  );
};

export default Hero;
