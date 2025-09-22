import Link from "next/link";

export const metadata = {
  title: "Contact Us | Ayoade Ventures",
  description:
    "Get in touch with Ayoade Ventures — contact us for wholesale natural drinks, orders, or partnerships.",
};

export default function ContactPage() {
  return (
    <main className="bg-secondary min-h-screen px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Contact Us
          </h1>
          <div className="mt-3 w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-dark/80 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you’re a retailer looking to
            stock our natural drinks or a customer with questions, reach out
            today.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact details */}
          <div className="bg-neutral p-6 md:p-8 rounded-2xl shadow-md space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-dark mb-3">Get in Touch</h2>
              <p className="text-dark/70">
                We respond quickly on WhatsApp and email. Don’t hesitate to
                contact us.
              </p>
            </div>

            <ul className="space-y-3 text-dark/90">
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <Link
                  href="tel:+2348107971507"
                  className="text-accent hover:underline"
                >
                  +234 810 797 1507
                </Link>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <Link
                  href="mailto:info@ayoadeventures.com"
                  className="text-accent hover:underline"
                >
                  info@ayoadeventures.com
                </Link>
              </li>
              <li>
                <span className="font-semibold">Address:</span> 123 Business
                Street, [City], Nigeria
              </li>
              <li>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <Link
                  href="https://wa.me/2348107971507?text=Hello!%20I%20want%20to%20place%20an%20order."
                  className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-[#21867a] transition"
                >
                  Chat with us →
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-dark/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..." // replace with real business location
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
