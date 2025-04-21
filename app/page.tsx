import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight, Award, FileText, Users, Download, ExternalLink } from "lucide-react"
import { generateOrganizationSchema, generateServicesSchema } from "./seo-utils"
import Script from "next/script"

// Add the structured data scripts at the beginning of the component
export default function Home() {
  // Sample certification data
  const certifications = [
    {
      id: 1,
      title: "Certyfikat SGSP",
      description: "Dyplom ukończenia Szkoły Głównej Służby Pożarniczej",
      type: "image",
      url: "/ibp/wyroznienie.webp",
    },
    {
      id: 2,
      title: "Certyfikat CNBOP - Systemy Sygnalizacji Pożaru",
      description: "Certyfikat ukończenia kursu CNBOP - Systemy Sygnalizacji Pożaru",
      type: "image",
      url: "/ibp/CNBOP-SSP.webp",
    },
    {
      id: 3,
      title: "Certyfikat CNBOP - Stałe Urządzenia Gaśnicze Gazowe",
      description: "Certyfikat ukończenia kursu CNBOP - Stałe Urządzenia Gaśnicze Gazowe",
      type: "image",
      url: "/ibp/CNBOP-SUGG.webp",
    },
    {
      id: 4,
      title: "Certyfikat producenta - Mercor",
      description: "Certyfikat autoryzowanego projektanta systemów przeciwpożarowych",
      type: "image",
      url: "/ibp/MCRwarsztaty.webp",
    },
  ]

  // Sample project images
  const projectImages = [
    {
      id: 1,
      title: "Projekt systemu oddymiania",
      description: "Centrum handlowe w Poznaniu",
      url: "/ibp/system.jpg",
    },
    {
      id: 2,
      title: "Symulacja CFD",
      description: "Budynek biurowy we Wrocławiu",
      url: "/ibp/projekt.jpg",
    },
    {
      id: 3,
      title: "System gaszenia",
      description: "Zakład produkcyjny w Warszawie",
      url: "/ibp/ro.jpg",
    },
  ]

  // Generate structured data
  const organizationSchema = generateOrganizationSchema()
  const servicesSchema = generateServicesSchema()

  return (
    <div className="min-h-screen bg-white">
      {/* Add JSON-LD structured data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/ibp/logo.png"
              alt="Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego - Logo"
              width={60}
              height={60}
              className="mr-3"
            />
            <h1 className="text-lg md:text-xl font-bold text-brand-blue">
              <span className="hidden md:inline">Jerzy Łangowicz - </span>
              <span className="text-sm md:text-lg font-medium block md:inline">
                Inżynieria Bezpieczeństwa Pożarowego
              </span>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4 text-sm md:text-base">
              <li>
                <a href="#uslugi" className="text-brand-blue hover:text-brand-orange transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#rozwoj" className="text-brand-blue hover:text-brand-orange transition-colors">
                  Rozwój
                </a>
              </li>
              <li>
                <a href="#certyfikaty" className="text-brand-blue hover:text-brand-orange transition-colors">
                  Certyfikaty
                </a>
              </li>
              <li>
                <a href="#projekty" className="text-brand-blue hover:text-brand-orange transition-colors">
                  Projekty
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-brand-blue hover:text-brand-orange transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section - Redesigned with centered content and logo above text */}
      <section className="relative bg-gradient-to-r from-brand-blue to-brand-blue-light text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('/ibp/hero.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo positioned above the text */}
            <div className="w-40 h-40 md:w-64 md:h-64 relative mb-8 md:mb-10">
              <Image
                src="/ibp/logo.png"
                alt="Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego - Logo firmowe"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Troszczymy się o Twoje bezpieczeństwo</h2>
            <p className="text-xl md:text-2xl mb-10">DORADZTWO, PROJEKTOWANIE, OPINIOWANIE, RZECZOZNAWSTWO</p>

            {/* Buttons side by side */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Nasze usługi
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-brand-blue font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Skontaktuj się z nami
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave at the bottom of the hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full text-white fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-4">Nasze Usługi</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Oferujemy kompleksowe rozwiązania w zakresie bezpieczeństwa pożarowego, dostosowane do indywidualnych
            potrzeb każdego klienta.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border-t-4 border-brand-red">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Symulacje CFD</h3>
                <p className="text-gray-700">
                  Oferujemy wykonywanie symulacji CFD wymaganych podczas projektowania systemów oddymiania obiektów
                  nietypowych.
                </p>
                <div className="mt-4 h-40 relative rounded-md overflow-hidden">
                  <Image
                    src="/CFD.jpg"
                    alt="Symulacja CFD - wizualizacja przepływu dymu w budynku"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border-t-4 border-brand-orange">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Rzeczoznawstwo</h3>
                <p className="text-gray-700">
                  Współpracujemy z doświadczonymi rzeczoznawcami ds. zabezpieczeń przeciwpożarowych, którzy rozwiążą
                  Państwa problemy.
                </p>
                <div className="mt-4 h-40 relative rounded-md overflow-hidden">
                  <Image
                    src="/smoke.jpg"
                    alt="Rzeczoznawstwo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border-t-4 border-brand-blue">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Doradztwo</h3>
                <p className="text-gray-700">
                  Wykonujemy wszelkiego rodzaju opracowania dotyczące branży przeciwpożarowej, w tym Dokumenty
                  Zabezpieczenia Przed Wybuchem, Instrukcje Bezpieczeństwa Pożarowego, Warunki Ochrony Przeciwpożarowej,
                  scenariusze pożarowe, matryce sterowań i inne.
                </p>
                <div className="mt-4 h-40 relative rounded-md overflow-hidden">
                  <Image
                    src="/consultant.jpg"
                    alt="Doradztwo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border-t-4 border-brand-red">
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-red"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M9 21v-6" />
                    <path d="M15 21v-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Projektowanie</h3>
                <p className="text-gray-700">
                  Oferujemy projektowanie wszystkich systemów przeciwpożarowych zarówno w budynkach, jak i
                  zabezpieczających urządzenia i linie technologiczne. Obok własnej wiedzy i doświadczenia
                  współpracujemy także z producentami, rzeczoznawcami i doświadczonymi firmami wykonawczymi.
                </p>
                <div className="mt-4 h-40 relative rounded-md overflow-hidden">
                  <Image
                    src="/engineering.jpg"
                    alt="Projektowanie"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="rozwoj" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-4">Rozwój i Doświadczenie</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Nieustannie podnosimy nasze kwalifikacje i zdobywamy nowe certyfikaty, aby zapewnić najwyższą jakość usług.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4 text-center">Ciągłe podnoszenie kwalifikacji</h3>
              <p className="text-gray-700 mb-6 text-center">
                Podstawą rozwoju jest ciągłe podnoszenie kwalifikacji, a jeżeli coś robimy, to robimy to dobrze.
                Potwierdzeniem tej tezy jest dyplom Rektora - Komendanta Szkoły Głównej Służby Pożarniczej dla
                najlepszego absolwenta.
              </p>
              <div className="flex justify-center mt-6">
                <div className="relative w-full h-64 bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="/dyplom.webp"
                    alt="Dyplom SGSP"
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-blue text-white text-center py-2 text-sm">
                    Dyplom SGSP
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4 text-center">Współpraca z producentami</h3>
              <p className="text-gray-700 mb-6 text-center">
                Drugim filarem rozwoju jest udział w szkoleniach organizowanych przez producentów zabezpieczeń
                przeciwpożarowych, dzięki którym możliwe jest zapoznanie się z najnowszymi systemami i urządzeniami
                dostępnymi na rynku.
              </p>
              <div className="flex justify-center mt-6">
                <div className="relative w-full h-64 bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="/smay-ewakuacja-2.webp"
                    alt="Certyfikat producenta"
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-orange text-white text-center py-2 text-sm">
                    Certyfikat producenta
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-red/5 to-brand-red/10 rounded-lg p-8 shadow-md">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4 text-center">Konferencje i warsztaty</h3>
              <p className="text-gray-700 mb-6 text-center">
                Trzecia droga rozwoju to udział w konferencjach i warsztatach pozwalający na pogłębienie wiedzy, wymianę
                doświadczeń i nawiązywanie kontaktów w środowisku.
              </p>
              <div className="flex justify-center mt-6">
                <div className="relative w-full h-64 bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="/kongres2017.webp"
                    alt="Certyfikat konferencji"
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-red text-white text-center py-2 text-sm">
                    Certyfikat konferencji
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section id="certyfikaty" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-4">Nasze Certyfikaty</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Posiadamy liczne certyfikaty i uprawnienia potwierdzające nasze kompetencje w dziedzinie bezpieczeństwa
            pożarowego.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={cert.url}
                    alt={`Certyfikat: ${cert.title} - ${cert.description}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-brand-blue">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                  {cert.type === "pdf" ? (
                    <div className="flex space-x-2">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-brand-blue hover:text-brand-orange transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" /> Podgląd
                      </a>
                      <a
                        href={cert.url}
                        download
                        className="flex items-center text-sm text-brand-blue hover:text-brand-orange transition-colors"
                      >
                        <Download className="h-4 w-4 mr-1" /> Pobierz PDF
                      </a>
                    </div>
                  ) : (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Powiększ
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* PDF Viewer Modal would be implemented with JavaScript in a real application */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projekty" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-4">Nasze Projekty</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Zrealizowaliśmy wiele projektów z zakresu bezpieczeństwa pożarowego dla różnych typów obiektów.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectImages.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.url || "/placeholder.svg"}
                    alt={`Projekt: ${project.title} - ${project.description}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-brand-blue">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Kontakt</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-white/80">
            Skontaktuj się z nami, aby omówić, jak możemy pomóc w zapewnieniu bezpieczeństwa pożarowego w Twoim
            obiekcie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location 1 */}
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue">Wielkopolska</h3>
              </div>
              <div className="space-y-4 pl-16">
                <p className="font-bold">Jerzy Łangowicz - inżynieria bezpieczeństwa pożarowego</p>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
                  <p>
                    ul. Leśna 42
                    <br />
                    62-065 Grodzisk Wlkp., woj. wielkopolskie
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                  <a href="tel:+48727339999" className="hover:text-brand-blue transition-colors">
                    +48 727 339 999
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0" />
                  <a
                    href="mailto:poznan@langowicz.pl"
                    className="text-brand-blue hover:text-brand-orange transition-colors"
                  >
                    poznan@langowicz.pl
                  </a>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue">Dolny Śląsk</h3>
              </div>
              <div className="space-y-4 pl-16">
                <p className="font-bold">Jerzy Łangowicz - inżynieria bezpieczeństwa pożarowego</p>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
                  <p>
                    Pastewnik 79A
                    <br />
                    58-410 Marciszów, pow. kamiennogórski, woj. dolnośląskie
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                  <a href="tel:+48727339999" className="hover:text-brand-blue transition-colors">
                    +48 727 339 999
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0" />
                  <a
                    href="mailto:wroclaw@langowicz.pl"
                    className="text-brand-blue hover:text-brand-orange transition-colors"
                  >
                    wroclaw@langowicz.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/ibp/logo.png" alt="Jerzy Łangowicz Logo" width={50} height={50} className="mr-3" />
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego. Wszelkie prawa
                zastrzeżone.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#uslugi" className="text-gray-400 hover:text-white transition-colors">
                Usługi
              </a>
              <a href="#rozwoj" className="text-gray-400 hover:text-white transition-colors">
                Rozwój
              </a>
              <a href="#certyfikaty" className="text-gray-400 hover:text-white transition-colors">
                Certyfikaty
              </a>
              <a href="#projekty" className="text-gray-400 hover:text-white transition-colors">
                Projekty
              </a>
              <a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
