import Link from "next/link";
import { Search, Book, Users, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* SECTION 1: Hero */}
      <section className="bg-blue-600 text-white py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Connect with Expert Tutors, Learn Anything
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
          Master new skills with personalized 1-on-1 tutoring from industry
          experts and top educators.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/tutors"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Find a Tutor
          </Link>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          How SkillBridge Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">1. Find your expert</h3>
            <p className="text-gray-600">
              Compare tutor profiles, read reviews, and find the perfect match
              for your goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">2. Book a session</h3>
            <p className="text-gray-600">
              Choose a time that works for you and book your session instantly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">3. Start learning</h3>
            <p className="text-gray-600">
              Meet with your tutor, achieve your goals, and leave a verified
              review.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Stats / Trust */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-400 mb-2">500+</h4>
            <p className="text-gray-400">Expert Tutors</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-400 mb-2">10,000+</h4>
            <p className="text-gray-400">Hours Taught</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-400 mb-2">4.9/5</h4>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Call to Action for Tutors */}
      <section className="container mx-auto px-4 text-center max-w-3xl">
        <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Want to share your knowledge?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our community of expert tutors. Set your own rates, manage your
          schedule, and make an impact.
        </p>
        <Link
          href="/register?role=TUTOR"
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-700 transition"
        >
          Become a Tutor
        </Link>
      </section>
    </div>
  );
}
