export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          © {new Date().getFullYear()} SkillBridge. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">Built for Assignment 4</p>
      </div>
    </footer>
  );
}
