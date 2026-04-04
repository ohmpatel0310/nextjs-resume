export default function Home() {
  return (
    <main role="main" className="max-w-3xl mx-auto px-6 py-10 bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Ohm Patel</h1>
        <p className="text-sm text-gray-600 mt-2">
          <a href="mailto:ohmpatel0310@gmail.com" className="hover:underline">
          ohmpatel0310@gmail.com
          </a> • 
          <a href="https://linkedin.com/in/ohmpatel0310" className="hover:underline ml-1">
          LinkedIn
          </a> • 
          <a href="https://github.com/ohmpatel0310" className="hover:underline ml-1">
          GitHub
          </a> • <span className="ml-1">863-326-3139</span>
        </p>
      </header>

      {/* EDUCATION */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Education
        </h2>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            University of South Florida – Judy Genshaft Honors College
          </h3>
          <p className="text-sm text-gray-600 italic">
            B.S. Business Analytics and Information Systems (Cybersecurity) | Finance
          </p>
          <p className="text-sm text-gray-500">
            May 2027 • GPA: 3.81
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Experience
        </h2>

        <div className="mb-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Tax Associate</h3>
            <span className="text-sm text-gray-500">Jan 2026 – Present</span>
          </div>
          <p className="text-sm text-gray-600 italic">H&R Block</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Prepared 20–40 tax returns weekly ensuring IRS compliance</li>
            <li>Saved clients $500–$2,000 through deduction analysis</li>
            <li>Reduced filing errors using tax software systems</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Finance Chair</h3>
            <span className="text-sm text-gray-500">Jan 2025 – Present</span>
          </div>
          <p className="text-sm text-gray-600 italic">Bull Bhangra</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Managed $15,000 budget and financial operations</li>
            <li>Led fundraising and sponsorship initiatives</li>
            <li>Coordinated 20+ events annually</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Marketing Coordinator</h3>
            <span className="text-sm text-gray-500">May 2021 – Present</span>
          </div>
          <p className="text-sm text-gray-600 italic">Influenster</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Created 150+ product reviews driving engagement</li>
            <li>Collaborated with brands on consumer insights</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Projects
        </h2>
        <h3 className="text-lg font-semibold text-gray-900">
          E-Commerce Performance Analysis (Tableau)
        </h3>
        <p className="text-sm text-gray-500">Fall 2025</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Analyzed 10,000+ rows of transactional data</li>
          <li>Built dashboards with KPIs and forecasts</li>
          <li>Recommended pricing and marketing strategies</li>
        </ul>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Leadership & Activities
        </h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">President – IB CAS Club</h3>
          <p className="text-sm text-gray-500">2023 – 2024</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Led 30+ service projects and events</li>
            <li>Managed teams of 20–30 volunteers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Tutor – IB Tutors</h3>
          <p className="text-sm text-gray-500">2023 – 2024</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Tutored 15–25 students in multiple subjects</li>
            <li>Improved performance through personalized teaching</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Skills & Recognition
        </h2>
        <div className="text-sm space-y-1">
          <p><span className="font-semibold">Technical:</span> Tableau, Microsoft Office</p>
          <p><span className="font-semibold">Languages:</span> Gujarati, Spanish, Hindi</p>
          <p>Silver Garland Nominee (2024)</p>
          <p>300+ Community Service Hours</p>
        </div>
      </section>

      <footer className="mt-10 pt-6 border-t text-center text-xs text-gray-400">
        © 2026 Ohm Patel
      </footer>

    </main>
  );
}