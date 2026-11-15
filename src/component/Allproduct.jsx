const Allproduct = async () => {
  let products = [];

  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" },
    );

    if (!res.ok) throw new Error("Product fetch failed");

    const result = await res.json();

    products = Array.isArray(result)
      ? result
      : result.data || result.products || [];
  } catch (error) {
    console.error(error);
  }

  // Bangla Number Formatter
  const bn = (value) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 1,
    }).format(Number(value) || 0);

  // Unit Formatter
  const getUnit = (unit) => {
    const units = {
      kg: "কেজি",
      gm: "গ্রাম",
      liter: "লিটার",
      piece: "পিস",
    };

    return units[unit] || unit;
  };

  return (
    <section
      id="market-prices"
      className="min-h-screen bg-[#f0f5f0] py-10 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            সব পণ্য
          </h1>

          <div className="mt-3 text-sm text-gray-500">
            মোট পণ্য: {bn(products.length)} টি
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((item) => {
              const isUp = item.change?.dir === "up";
              const isDown = item.change?.dir === "down";

              const changePercent = Math.abs(Number(item.change?.pct) || 0);

              const isImageUrl =
                typeof item.image === "string" &&
                /^(https?:\/\/|\/)/.test(item.image);

              return (
                <div
                  key={item.id || item.slug}
                  className="bg-[#fbfdfb] border border-[#dce7df]
                    rounded-[22px] p-5
                    hover:shadow-lg transition-all duration-300"
                >
                  {/* TOP SECTION */}
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div
                      className="w-[65px] h-[65px] shrink-0
                      rounded-[17px] bg-[#eff5f0]
                      flex items-center justify-center"
                    >
                      {isImageUrl ? (
                        <img
                          src={item.image}
                          alt={item.nameBn}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-3xl">{item.image || "🛍️"}</span>
                      )}
                    </div>

                    {/* Product Name */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-slate-900">
                        {item.nameBn}
                      </h2>
                    </div>
                  </div>

                  {/* PRICE SECTION */}
                  <div className="flex justify-between items-end gap-3 mt-5">
                    <div>
                      <p className="text-sm text-gray-500">আজকের দাম</p>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {bn(item.today)} টাকা
                      </h3>

                      <p className="text-xs text-gray-400 mt-1">
                        প্রতি {getUnit(item.unit)}
                      </p>
                    </div>

                    {/* Change Badge */}
                    <div
                      className={`px-3 py-2 rounded-full
                        text-sm font-semibold whitespace-nowrap
                        ${
                          isUp
                            ? "bg-red-50 text-red-500"
                            : isDown
                              ? "bg-green-50 text-green-600"
                              : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      {isUp ? "▲" : isDown ? "▼" : "—"} {bn(changePercent)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl mb-3">📦</div>

            <h2 className="text-xl font-bold text-slate-700">
              কোনো পণ্য পাওয়া যায়নি
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Allproduct;
