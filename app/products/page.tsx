export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Our Products
      </h1>

      <p className="text-lg text-gray-700 mb-12 text-center">
        Explore our high-performance oilfield and water-based drilling fluid additives.  
        Trusted worldwide for quality and innovation.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Product Card */}
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Dynamul-P</h2>
          <p className="text-gray-600 text-sm">
            Primary Emulsifier for Oil-Base Mud <br />
            Specification: 180KG/drum
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Dynagel-83 Plus</h2>
          <p className="text-gray-600 text-sm">
            Super High-Temperature Organophilic Clay <br />
            Specification: 25Kg/bag
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">CMS-HT</h2>
          <p className="text-gray-600 text-sm">
            Crosslinked & Carboxymethyl Starch <br />
            Specification: 25Kg/bag
          </p>
        </div>
      </div>
    </main>
  );
}
