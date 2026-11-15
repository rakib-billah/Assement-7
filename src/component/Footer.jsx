// const Footer = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="w-full bg-[#fafcfc]">
      <div className="max-w-5xl mx-auto px-5 py-5 min-h-[81px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        {/* Left Text */}
        <p className="text-[#52677a] text-sm sm:text-base md:text-lg text-center md:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right Text */}
        <p className="text-[#52677a] text-sm sm:text-base md:text-lg text-center md:text-right">
          সকল দাম সম্ভাব্য; বাজারের অবস্থার উপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
