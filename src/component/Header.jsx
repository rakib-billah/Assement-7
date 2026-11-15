import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-[#F8FAF9]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-3 py-3 sm:px-4">
        {/* Logo & Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <div className="shrink-0 rounded-xl bg-[#05893E] p-2 ">
            <span
              className="width={40}
              height={40}"
            ></span>
            🛒
          </div>

          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-base font-bold text-gray-800 sm:text-xl">
              বাজার দর
            </h1>
            <span className="block truncate text-[9px] text-gray-600 sm:text-xs">
              {date}
            </span>
          </div>
        </Link>

        {/* Auth Buttons */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href="/singin"
            className="whitespace-nowrap rounded-lg border border-[#05893E] px-2.5 py-2 text-[10px] font-semibold text-[#05893E] transition hover:bg-[#e8f5ec] sm:px-5 sm:py-2.5 sm:text-xs"
          >
            সাইন ইন
          </Link>

          <Link
            href="/singup"
            className="whitespace-nowrap rounded-lg bg-[#05893E] px-2.5 py-2 text-[10px] font-semibold text-white shadow-sm transition hover:bg-[#047532] sm:px-5 sm:py-2.5 sm:text-xs"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
