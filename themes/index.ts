interface Theme {
  slug: string;
  name: string;
  background: string;
  textColor: string;
  gradient: string;
  semititle: string;
}

const defaultTheme: Theme = {
  slug: "default",
  name: "Padrão",
  background: "bg-stone-900",
  textColor: "text-neutral-100",
  gradient: "from-orange-400/20 via-amber-900/20 to-yellow-500/20",
  semititle: "text-stone-400",
};

const whiteTheme: Theme = {
  slug: "white",
  name: "Branco",
  background: "bg-white",
  textColor: "text-stone-900",
  gradient: "from-orange-400/20 via-amber-900/20 to-yellow-500/20",
  semititle: "text-stone-600",
};

const availableThemes = [defaultTheme, whiteTheme];

export { availableThemes };
export { type Theme };
