import React, { useState } from "react";

import ThemePicker from "components/theme-picker";
import Header from "components/header";
import Footer from "components/footer";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ThemePicker isOpen={isOpen} />
      <div
        className={`antialised min-h-screen w-full bg-stone-900 text-neutral-100 pt-8 md:pt-24`}
      >
        <div className="relative z-10 mx-auto w-full sm:max-w-screen-sm">
          <div className="relative">
            <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] z-[-1] bg-gradient-to-r  blur-3xl filter sm:top-[-6vw] sm:right-[-7vw] sm:left-[-7vw]"></span>
          </div>
        </div>
        <Header toggleMenu={setIsOpen} />
        <main className="mx-auto max-w-screen-md px-6">
          {props.children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
