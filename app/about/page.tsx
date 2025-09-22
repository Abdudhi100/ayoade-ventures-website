export const metadata = {
  title: "About Us | Ayoade Ventures",
  description:
    "Learn about Ayoade Ventures — a trusted distributor of natural, low-sugar, non-carbonated drinks for children and families.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
        About Us
      </h1>

      {/* Intro */}
      <div className="bg-secondary rounded-2xl p-6 md:p-10 shadow-sm mb-12">
        <p className="text-lg text-dark leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold text-dark">Ayoade Ventures</span>, we are
          committed to providing healthier alternatives to sugary sodas. We
          proudly distribute{" "}
          <span className="text-accent font-semibold">Mr Fruits</span> and{" "}
          <span className="text-accent font-semibold">GoFresh</span> — delicious,
          natural, low-sugar drinks for children and families.
        </p>
        <p className="text-lg text-dark leading-relaxed mb-6">
          Based in <span className="font-medium">[Your City]</span>, we work
          closely with local retailers to ensure our drinks are always within
          reach. Our mission is simple:{" "}
          <span className="italic text-primary">
            healthy hydration for every child.
          </span>
        </p>
        <p className="text-lg text-dark leading-relaxed">
          We take pride in excellent customer service, fast delivery, and building
          strong partnerships with our retail network.
        </p>
      </div>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-6">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dark mb-2">Health First</h3>
            <p className="text-dark text-sm leading-relaxed">
              Every product we distribute is carefully chosen to support children
              and families with better hydration options.
            </p>
          </div>
          <div className="bg-neutral rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dark mb-2">Community</h3>
            <p className="text-dark text-sm leading-relaxed">
              We partner with local shops, schools, and events to keep families
              connected through healthier lifestyle choices.
            </p>
          </div>
          <div className="bg-neutral rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-dark mb-2">Trust</h3>
            <p className="text-dark text-sm leading-relaxed">
              We value long-term relationships and deliver on our promises to
              retailers and customers alike.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
