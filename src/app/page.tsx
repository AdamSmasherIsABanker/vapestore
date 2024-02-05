
import Link from "next/link"

export default function Component() {
  return (
    <header className="fixed top-0 w-full h-16 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white flex items-center justify-between px-6 shadow-lg font-sans">
      <Link className="text-lg font-semibold" href="#">
        <span className="sr-only">Home</span>
        Home
      </Link>
      <nav className="flex gap-6">
        <Link className="group hover:text-green-400 transition-colors" href="http://localhost:3000/flavors">
          <span className="sr-only">Products</span>
          Products
        </Link>
      </nav>
    </header>
  )
}

