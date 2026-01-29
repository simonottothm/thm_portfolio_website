import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Start", href: "/" },
    { name: "Über mich", href: "/ueber-mich" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Projekte", href: "/projekte" },
    { name: "Vita", href: "/vita" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "GitHub", href: "#", icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-muted-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-display font-bold mb-4">
              SO | Simon Otto
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Performance Marketing & Web-Development
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-muted-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Simon Otto. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

