import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-4 py-3">
      <div className="bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 text-white rounded-full shadow-2xl max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center shadow-md">
              <div className="text-white font-bold text-xl">C</div>
            </div>
            <span className="text-lg font-bold">CUBE GRAPHIC</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-cyan-300 transition border-b-2 border-transparent hover:border-cyan-300 pb-1">
              Inicio
            </Link>
            <Link href="/tienda" className="hover:text-cyan-300 transition border-b-2 border-transparent hover:border-cyan-300 pb-1">
              Tienda
            </Link>
            <Link href="#" className="hover:text-cyan-300 transition border-b-2 border-transparent hover:border-cyan-300 pb-1">
              Encuéntranos
            </Link>
            <Link href="/#contacto" className="hover:text-cyan-300 transition border-b-2 border-transparent hover:border-cyan-300 pb-1">
              Contáctanos
            </Link>
            <Link href="#" className="hover:text-cyan-300 transition border-b-2 border-transparent hover:border-cyan-300 pb-1">
              ¿Quiénes somos?
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:text-cyan-300 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="hover:text-cyan-300 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
