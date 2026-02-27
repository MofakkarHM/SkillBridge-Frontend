import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <BookOpen className="h-6 w-6" />
          SkillBridge
        </Link>

        <div className="hidden md:flex gap-6 font-medium text-gray-600">
          <Link href="/tutors" className="hover:text-blue-600 transition">
            Find a Tutor
          </Link>
          <Link href="/categories" className="hover:text-blue-600 transition">
            Subjects
          </Link>
        </div>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-md transition"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
