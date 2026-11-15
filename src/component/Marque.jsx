import Marquee from "react-fast-marquee";
import Link from "next/link";

const Marque = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <Marquee
        pauseOnHover={true}
        speed={45}
        gradient={false}
        className="flex items-center h-full overflow-hidden bg-[#F8FAF9]"
      >
        {data.map((item) => {
          const isUp = item.change.dir === "up";
          const isDown = item.change.dir === "down";

          return (
            <Link
              key={item.id}
              href={`/product/${item.slug}`}
              className="flex items-center gap-2 mx-2 sm:mx-3 px-3 py-2  transition-colors whitespace-nowrap text-sm sm:text-base md:text-lg border-r border-[#E5EAE7]"
            >
              <span className="text-base sm:text-lg leading-none">
                {item.image}
              </span>

              <span className="font-medium text-[#374151]">{item.nameBn}</span>

              <span className="text-[#6B7280] text-xs sm:text-sm">
                ({item.serviceType})
              </span>

              <span className="font-medium text-[#6B7280]">
                {item.today} টাকা
              </span>

              <span
                className={`font-bold text-xs sm:text-sm flex items-center gap-1 ${
                  isUp
                    ? "text-red-600"
                    : isDown
                      ? "text-green-600"
                      : "text-gray-500"
                }`}
              >
                {isUp && "▲ "}
                {isDown && "▼ "}
                {!isUp && !isDown && "— "}
                {item.change.pct}
              </span>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Marque;
