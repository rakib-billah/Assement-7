import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  const data = await res.json();
  // console.log(data);

  return (
    <div className="w-full max-w-5xl mx-auto px-3 py-3 lg:ml-32">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {data.map((catagori) => (
          <Link
            key={catagori.id}
            href={catagori.slug}
            className="rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 hover:bg-[#DADEDA] hover:text-[##DADEDA]"
          >
            {catagori.icon} {catagori.nameBn}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
