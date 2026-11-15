import Link from "next/link";

const Banner = () => {
  //Dynamic time
  const dynamicDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="w-full bg-[#f0f5f0] px-4 py-8 md:px-6 lg:px-8">
      {/* Hero Card */}
      <div className="card mx-auto w-full max-w-5xl rounded-[22px] border border-[#dfe9e0] bg-[#fafcf9] shadow-none">
        <div className="flex flex-col-reverse items-center gap-5 p-5 sm:p-7 md:flex-row md:justify-between md:gap-8 lg:px-10 lg:py-8">
          {/* Left Content */}
          <div className="w-full flex-1 text-center md:text-left">
            <div className="badge badge-success badge-outline mb-3 border-none bg-[#e2f3e8] px-3 py-3 text-xs font-medium text-[#078b45]">
              {dynamicDate}
            </div>

            <h1 className="mb-4 text-2xl font-bold leading-tight text-[#202b23] sm:text-3xl lg:text-[38px]">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-[#737c75] md:mx-0 md:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <a
              href="#market-prices"
              className="btn btn-success border-none bg-[#078c43] px-6 text-white shadow-md hover:bg-[#067538] rounded-lg"
            >
              সব পণ্যের দাম দেখুন
            </a>
          </div>

          {/* Right Illustration */}
          <div className="flex w-full shrink-0 items-center justify-center md:w-[32%] lg:w-[30%]">
            <svg
              viewBox="0 0 240 210"
              className="h-40 w-48 sm:h-48 sm:w-56 lg:h-52 lg:w-60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shadow */}
              <ellipse cx="120" cy="190" rx="103" ry="12" fill="#E4E9E5" />

              {/* Vegetable Leaves */}
              <path
                d="M84 49C87 35 94 28 105 25"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M146 44C145 28 136 17 126 12"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M144 37C151 25 159 23 166 24"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M190 83C193 68 201 62 207 60"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Tomato */}
              <circle cx="80" cy="77" r="29" fill="#F04450" />
              <ellipse cx="74" cy="65" rx="8" ry="12" fill="#FF9290" />

              {/* Green Vegetable */}
              <ellipse cx="147" cy="64" rx="34" ry="35" fill="#19C768" />
              <ellipse cx="132" cy="59" rx="8" ry="13" fill="#64E99A" />
              <path
                d="M147 30C150 21 158 17 166 16"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Purple Onion */}
              <circle cx="61" cy="104" r="19" fill="#AE4CF2" />
              <circle cx="51" cy="98" r="5" fill="#D58AFF" />

              {/* Orange Vegetable */}
              <ellipse cx="116" cy="99" rx="21" ry="18" fill="#FF7615" />
              <path
                d="M113 81C109 72 116 65 124 64"
                stroke="#078C43"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Yellow Pepper */}
              <ellipse cx="182" cy="103" rx="21" ry="18" fill="#F5A000" />
              <path
                d="M182 84C183 75 190 71 195 70"
                stroke="#078C43"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Basket */}
              <path
                d="M62 120H203L188 185C187 191 181 195 174 195H91C84 195 79 191 77 185L62 120Z"
                fill="#B9540B"
              />
              <path d="M62 120H203L197 139H67L62 120Z" fill="#893908" />

              {/* Basket Details */}
              <path
                d="M85 139L91 185M116 139L117 190M146 139L146 190M177 139L171 185"
                stroke="#873708"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M67 139H197" stroke="#D16B1B" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
