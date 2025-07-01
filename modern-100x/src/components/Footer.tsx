const Footer = () => (
  <footer id="footer" className="w-full py-6 bg-black text-center text-gray-500 text-sm mt-0">
    <div className="mb-4 flex flex-col items-center gap-1 text-base text-gray-300">
      <div><span className="font-semibold text-white">Contact Us:</span></div>
      <div>Email: <a href="mailto:Ailifebot@gmail.com" className="text-blue-400 hover:underline">Ailifebot@gmail.com</a></div>
      <div>Phone: <a href="tel:+919873641909" className="text-blue-400 hover:underline">9873641909</a></div>
      <div>Address: SEC 15, NOIDA</div>
    </div>
    © {new Date().getFullYear()} AI LifeBOT. All rights reserved.
  </footer>
);

export default Footer; 