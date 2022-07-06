import React from "react";

import Header from "components/header";
import Footer from "components/footer";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="antialised min-h-screen w-full bg-gradient-to-tr from-stone-900 to-stone-900 text-neutral-100 pt-8 md:pt-24">
      <div className="relative z-10 mx-auto w-full sm:max-w-screen-sm">
        <div className="relative">
          <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] z-[-1] bg-gradient-to-r from-orange-400/20 via-amber-900/20 to-yellow-500/20 blur-3xl filter sm:top-[-6vw] sm:right-[-7vw] sm:left-[-7vw]"></span>
        </div>
      </div>
      <Header />
      <main className="mx-auto max-w-screen-md px-6">
        {props.children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
