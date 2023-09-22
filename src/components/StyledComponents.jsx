export const SectionWrapper = ({ className = "", children }) => (
  <div
    className={`${className} mx-auto max-w-[1513px] px-4 xs:px-8 md:px-10 lg:px-16 xl:px-24`}
  >
    {children}
  </div>
);
