"use client";

export default function ProductsPage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          We provide a full portfolio of high-performance drilling fluid
          additives for oil-based and water-based applications — trusted
          worldwide for their quality and performance.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Oil-Based Drilling Fluid Additives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dynamul-P",
              desc: "Primary Emulsifier for Oil-Base Mud",
              spec: "180KG / drum",
            },
            {
              name: "Dynamul-S",
              desc: "Secondary Emulsifier for Oil-Base Mud",
              spec: "180KG / drum",
            },
            {
              name: "Dynamul-HW",
              desc: "High-Temperature One-Drum Emulsifier",
              spec: "180KG / drum",
            },
            {
              name: "Dynamul-HT",
              desc: "High-Temperature Emulsifier for Oil & Synthetic Base Mud",
              spec: "180KG / drum",
            },
            {
              name: "Dyna-HRP",
              desc: "Organoclay Activator",
              spec: "200KG / barrel",
            },
            {
              name: "Dynamod",
              desc: "Rheology Modifier",
              spec: "170KG / barrel",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {p.name}
              </h3>
              <p className="text-gray-700">{p.desc}</p>
              <p className="text-sm text-gray-500 mt-2">{p.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Water-Based */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Water-Based Drilling Fluid Additives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "DYNA-LUBE",
              desc: "Water-base Mud Lubricant",
              spec: "200KG / drum",
            },
            {
              name: "CACL-VIS",
              desc: "Modified Starch for Calcium Chloride Drilling Fluid",
              spec: "25KG / bag",
            },
            {
              name: "CMS-HT",
              desc: "Crosslinked & Carboxymethyl Starch",
              spec: "25KG / bag",
            },
            {
              name: "FLO-TROL",
              desc: "Non-Ionic Crosslinked Starch",
              spec: "25KG / bag",
            },
            {
              name: "CMS",
              desc: "Carboxymethyl Starch",
              spec: "25KG / bag",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {p.name}
              </h3>
              <p className="text-gray-700">{p.desc}</p>
              <p className="text-sm text-gray-500 mt-2">{p.spec}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
