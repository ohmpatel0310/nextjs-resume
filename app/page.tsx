export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white min-h-screen font-sans">

      {/* HEADER */}
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Ohm Patel</h1>
        <p className="text-sm text-gray-600 mt-2">
          ohmpatel0310@gmail.com | linkedin.com/in/ohmpatel0310 | github.com/ohmpatel0310 | 863-326-3139
        </p>
      </header>

      {/* EDUCATION */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">
          Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            University of South Florida – Judy Genshaft Honors College
          </h3>
          <p className="text-gray-600 italic text-sm">
            Bachelor of Science in Business Analytics and Information Systems (Cybersecurity Concentration) | Finance
          </p>
          <p className="text-gray-500 text-sm">
            Expected Graduation: May 2027 | GPA: 3.81
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">
          Experience
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Tax Associate
          </h3>
          <p className="text-gray-600 italic text-sm">
            H&R Block | Jan 2026 – Present
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Prepared and reviewed 20–40 federal and state tax returns per week ensuring IRS compliance</li>
            <li>Conducted client interviews to identify deductions and save clients $500–$2,000 per return</li>
            <li>Used proprietary tax software to process returns efficiently and reduce errors</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Finance Chair
          </h3>
          <p className="text-gray-600 italic text-sm">
            Bull Bhangra | Jan 2025 – Present
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Managed $15,000 annual budget including funding, payments, and financial planning</li>
            <li>Led sponsorship and fundraising initiatives to increase revenue</li>
            <li>Coordinated logistics for 20+ performances and events annually</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Marketing Coordinator
          </h3>
          <p className="text-gray-600 italic text-sm">
            Influenster | May 2021 – Present
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Created 150+ product reviews to increase engagement and brand visibility</li>
            <li>Collaborated with national brands to provide consumer insights and feedback</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">
          Projects
        </h2>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            E-Commerce Performance Analysis (Tableau)
          </h3>
          <p className="text-gray-600 italic text-sm">Fall 2025</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Analyzed 10,000+ rows of transactional data to evaluate profitability and efficiency</li>
            <li>Built interactive dashboards with KPI metrics, heat maps, and forecasts</li>
            <li>Recommended pricing and marketing strategies using what-if analysis</li>
          </ul>
        </div>
      </section>

      {/* EXTRACURRICULARS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">
          Leadership & Extracurriculars
        </h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            President – IB CAS Club
          </h3>
          <p className="text-gray-600 italic text-sm">Aug 2023 – May 2024</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Led 30+ service projects and events increasing student engagement</li>
            <li>Managed 20–30 volunteers per event through effective leadership</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Tutor – IB Tutors
          </h3>
          <p className="text-gray-600 italic text-sm">Aug 2023 – May 2024</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Tutored 15–25 students in math, chemistry, and Spanish</li>
            <li>Improved student performance through personalized teaching strategies</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 uppercase">
          Skills & Recognitions
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Tableau, Microsoft Office (Excel, Word, PowerPoint)</li>
          <li>Data Analysis, Financial Analysis</li>
          <li>Gujarati (Native), Spanish (Working Proficiency), Hindi (Working Proficiency)</li>
          <li>Silver Garland Nominee – Spanish (2024)</li>
          <li>300+ Community Service Hours</li>
        </ul>
      </section>

    </main>
  );
}