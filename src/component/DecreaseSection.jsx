const DecreaseSection = async () => {
  let products = [];

  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Product fetch failed");
    }

    const result = await res.json();

    products = Array.isArray(result)
      ? result
      : result.data || result.products || [];
  } catch (error) {
    console.error(error);
  }

  // শুধু দাম কমেছে এমন পণ্য
  const decreasedProducts = products.filter(
    (item) => item.change?.dir === "down",
  );

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
    <section className="min-h-screen bg-[#f0f5f0] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            আজ দাম কমেছে
          </h1>
        </div>

        {/* Product Grid */}
        {decreasedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {decreasedProducts.map((item) => {
              const changePercent = Math.abs(Number(item.change?.pct) || 0);

              const isImageUrl =
                typeof item.image === "string" &&
                /^(https?:\/\/|\/)/.test(item.image);

              return (
                <div
                  key={item.id || item.slug}
                  className="rounded-[22px] border border-[#dce7df] bg-[#fbfdfb] p-5 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Product Image and Name */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-[17px] bg-[#eff5f0]">
                      {isImageUrl ? (
                        <img
                          src={item.image}
                          alt={item.nameBn || "Product"}
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-3xl">{item.image || "🛍️"}</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-semibold text-slate-900">
                        {item.nameBn}
                      </h2>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-500">আজকের দাম</p>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {bn(item.today)} টাকা
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        প্রতি {getUnit(item.unit)}
                      </p>
                    </div>

                    {/* Price Decrease Badge */}
                    <div className="whitespace-nowrap rounded-full bg-green-50 px-3 py-2 text-sm font-semibold text-green-600">
                      ▼ {bn(changePercent)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center">
            <div className="mb-3 text-5xl">📦</div>

            <h2 className="text-xl font-bold text-slate-700">
              কোনো দাম কমেছে এমন পণ্য পাওয়া যায়নি
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default DecreaseSection;
