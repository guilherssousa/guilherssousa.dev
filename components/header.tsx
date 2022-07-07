import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/works",
    label: "Trabalhos",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contato",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onIntersect: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.intersectionRatio < 1);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: [1],
    };

    const { current: headerEl } = headerRef;

    const observer = new IntersectionObserver(onIntersect, observerOptions);

    if (headerEl) observer.observe(headerEl);

    return () => {
      if (headerEl) observer.unobserve(headerEl);
    };
  }, [headerRef]);

  const isRouteActive = (route: string) => router.pathname.includes(route);

  return (
    <header
      className={`
        sticky top-[-1px] rounded-xl px-6 max-w-screen-md mx-auto flex items-center justify-end mb-8 py-6 z-50
        ${isVisible ? "backdrop-blur-sm backdrop-saturate-150 shadow-sm" : ""}
      `}
      ref={headerRef}
    >
      <nav className="flex gap-x-4 md:gap-x-6 font-bold text-lg text-stone-400">
        {routes.map((route) => (
          <Link key={route.path} href={route.path} passHref>
            <a
              className={`border-b-2 border-b-transparent hover:border-orange-500 hover:text-neutral-100 transition-color ${
                isRouteActive(route.path) ? "text-neutral-100" : ""
              }`}
            >
              {route.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
