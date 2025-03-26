import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <p>© 2023 TypingTestPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
