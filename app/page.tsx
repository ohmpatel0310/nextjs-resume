export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white min-h-screen font-sans">
      {/* HEADER */}
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Ohm Patel</h1>
        <p className="text-lg text-blue-600">Email | LinkedIn | Phone</p>
      </header>

      {/* EDUCATION */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">University of South Florida</h3>
          <p className="text-gray-600 italic text-sm">Bachelor of Science in Business Analytics and Information Systems</p>
        </div>
      </section>

      {/* Add your Experience and Skills sections here! */}
    </main>
  );
}