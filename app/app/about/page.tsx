"use client";

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-blue-600">Unitech Chemical Ltd.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Established in 2006, Unitech Chemical Ltd. is a trusted global
          manufacturer of oilfield drilling fluid additives and fine chemicals,
          proudly serving clients in more than 50 countries.
        </p>
      </section>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Company</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based in Kaiping City, Guangdong Province, at the heart of the
            Greater Bay Area, Unitech enjoys convenient access to international
            trade routes by land, sea, and air. With a registered capital of RMB
            25.8 million and a 78,000 sqm production site, we are equipped with
            advanced manufacturing and testing facilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our portfolio includes high-performance additives for both
            water-based and oil-based drilling fluids, designed for efficiency,
            safety, and reliability in the toughest environments.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092335434-8c1d5cfa67a0?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=1200"
            alt="Unitech facility"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recognitions & Certifications
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              🌐 Tier-1 Network Supplier of Oilfield Chemicals
            </li>
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              ✅ CNPC Product Quality Certification
            </li>
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              🏆 Sinopec Oilfield Chemicals Resource Market Member
            </li>
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              ⭐ Gold Supplier to CNOOC
            </li>
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              🚀 National High-Tech Enterprise
            </li>
            <li className="bg-white shadow p-6 rounded-lg border border-gray-100">
              💡 Recipient of National Innovation Fund
            </li>
          </ul>
        </div>
      </section>

      {/* Export Markets */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Global Presence
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
          Unitech products are exported to over 50 countries, including the
          United States, Canada, Indonesia, Malaysia, Australia, the Middle
          East, Russia, and other CIS nations. We are honored to serve major
          global oilfield leaders such as Schlumberger, Baker Hughes, and
          Halliburton.
        </p>
        <img
          src="https://images.unsplash.com/photo-1528747045269-390fe33c19d0?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=1200"
          alt="Global markets"
          className="rounded-2xl shadow-md mx-auto"
        />
      </section>
    </main>
  );
}
