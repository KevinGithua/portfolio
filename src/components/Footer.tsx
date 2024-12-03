"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Kevin G. All rights reserved.</p>
      <div className="flex justify-center mt-4">
        <a href="https://github.com/your-profile" className="mx-2">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" className="mx-2">LinkedIn</a>
      </div>
    </footer>
  );
}
