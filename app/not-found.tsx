import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-t from-slate-950 to-gray-950 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Sorry, the page you are looking for doesn't exist.</p>
      <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Return to main page
      </Link>
    </div>
  );
}
