import type { Metadata } from "next"

// Base metadata for the site
export const baseMetadata: Metadata = {
  title: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego | Eksperci w dziedzinie bezpieczeństwa pożarowego",
  description:
    "Profesjonalne usługi w zakresie inżynierii bezpieczeństwa pożarowego. Oferujemy symulacje CFD, rzeczoznawstwo, doradztwo i projektowanie systemów przeciwpożarowych.",
  keywords:
    "inżynieria bezpieczeństwa pożarowego, symulacje CFD, rzeczoznawstwo pożarowe, doradztwo pożarowe, projektowanie systemów przeciwpożarowych",
  authors: [{ name: "Jerzy Łangowicz" }],
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://langowicz.pl",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://langowicz.pl",
    title: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
    description:
      "Profesjonalne usługi w zakresie inżynierii bezpieczeństwa pożarowego. Symulacje CFD, rzeczoznawstwo, doradztwo i projektowanie.",
    siteName: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Jerzy Łangowicz Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
    description: "Profesjonalne usługi w zakresie inżynierii bezpieczeństwa pożarowego.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Generate JSON-LD structured data for the organization
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
    description:
      "Profesjonalne usługi w zakresie inżynierii bezpieczeństwa pożarowego. Oferujemy symulacje CFD, rzeczoznawstwo, doradztwo i projektowanie systemów przeciwpożarowych.",
    url: "https://langowicz.pl",
    logo: "https://langowicz.pl/logo.webp",
    image: "https://langowicz.pl/logo.webp",
    telephone: "+48727339996",
    email: "poznan@langowicz.pl",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "ul. Leśna 42",
        addressLocality: "Grodzisk Wlkp.",
        postalCode: "62-065",
        addressRegion: "Wielkopolska",
        addressCountry: "PL",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Pastewnik 79A",
        addressLocality: "Marciszów",
        postalCode: "58-410",
        addressRegion: "Dolny Śląsk",
        addressCountry: "PL",
      },
    ],
    sameAs: ["https://langowicz.pl"],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.2297,
        longitude: 21.0122,
      },
      geoRadius: "200000",
    },
    services: ["Symulacje CFD", "Rzeczoznawstwo", "Doradztwo", "Projektowanie systemów przeciwpożarowych"],
  }
}

// Generate JSON-LD structured data for services
export function generateServicesSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Symulacje CFD",
      provider: {
        "@type": "ProfessionalService",
        name: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
        url: "https://langowicz.pl",
      },
      description:
        "Oferujemy wykonywanie symulacji CFD wymaganych podczas projektowania systemów oddymiania obiektów nietypowych.",
      areaServed: "Polska",
      serviceType: "Symulacje CFD",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rzeczoznawstwo",
      provider: {
        "@type": "ProfessionalService",
        name: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
        url: "https://langowicz.pl",
      },
      description:
        "Współpracujemy z doświadczonymi rzeczoznawcami ds. zabezpieczeń przeciwpożarowych, którzy rozwiążą Państwa problemy.",
      areaServed: "Polska",
      serviceType: "Rzeczoznawstwo pożarowe",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Doradztwo",
      provider: {
        "@type": "ProfessionalService",
        name: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
        url: "https://langowicz.pl",
      },
      description:
        "Wykonujemy wszelkiego rodzaju opracowania dotyczące branży przeciwpożarowej, w tym Dokumenty Zabezpieczenia Przed Wybuchem, Instrukcje Bezpieczeństwa Pożarowego, Warunki Ochrony Przeciwpożarowej, scenariusze pożarowe, matryce sterowań i inne.",
      areaServed: "Polska",
      serviceType: "Doradztwo pożarowe",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Projektowanie",
      provider: {
        "@type": "ProfessionalService",
        name: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
        url: "https://langowicz.pl",
      },
      description:
        "Oferujemy projektowanie wszystkich systemów przeciwpożarowych zarówno w budynkach, jak i zabezpieczających urządzenia i linie technologiczne.",
      areaServed: "Polska",
      serviceType: "Projektowanie systemów przeciwpożarowych",
    },
  ]
}
