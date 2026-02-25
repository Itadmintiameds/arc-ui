export default function Footer() {
  return (
    <footer className="bg-[#0b1b34] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-bold mb-3">ARC SPORTZONE</h3>
          <p className="text-sm text-gray-300">
            Hebbal Industrial Area<br />
            Mysuru - 570016<br />
            +91 89519 50916
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Packages</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Regular Packages</li>
            <li>Corporate Packages</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <p className="text-sm text-gray-300">
            Facebook • Instagram • YouTube
          </p>
        </div>
      </div>

      <div className="text-center text-sm py-4 bg-[#081428]">
        © {new Date().getFullYear()} ARC Sportzone
      </div>
    </footer>
  );
}