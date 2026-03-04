import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-gray-400 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Name
            </h2>
            <p className="text-sm leading-relaxed">
              Frontend Developer building modern, responsive and
              user-focused web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>

            <div className="flex justify-center md:justify-start gap-5 text-xl">

              <a href="linkedin.com/in/vishalvk29/" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 hover:scale-110 transition transform">
                <FaLinkedin />
              </a>

              <a href="https://github.com/imvishalvk/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition transform">
                <FaGithub />
              </a>

              <a href="https://www.instagram.com/imvishalvk/" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-500 hover:scale-110 transition transform">
                <FaInstagram />
              </a>

              <a href="mailto:vkvishalkr29@gmail.com"
                className="hover:text-red-500 hover:scale-110 transition transform">
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vishal Kumar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;