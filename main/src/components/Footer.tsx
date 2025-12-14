const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-800 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} RepoInsight · Built with Gemini API & GitHub
      API
    </footer>
  );
};

export default Footer;
