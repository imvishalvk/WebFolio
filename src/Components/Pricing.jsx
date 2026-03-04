import React, { useState } from "react";
import ContactModal from "./ContactModal";

const plans = [
  {
    name: "Landing Page",
    tag: "Starter",
    price: "₹5,000",
    priceNote: "Fixed price",
    timeline: "3–5 days",
    description: "A clean, conversion-focused landing page to establish your online presence and attract customers.",
    features: [
      "Single page design",
      "Fully responsive layout",
      "Up to 6 sections",
      "Contact form",
      "SEO meta tags",
      "1 revision round",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "React SPA",
    tag: "Popular",
    price: "₹15,000",
    priceNote: "Based on size & timeline",
    timeline: "1–3 weeks",
    description: "A modern single-page React application tailored to your project scope, complexity, and time requirements.",
    features: [
      "Multi-page React app",
      "Routing & navigation",
      "API / backend integration",
      "Responsive + animations",
      "State management",
      "2 revision rounds",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Full Stack App",
    tag: "Professional",
    price: "₹20,000–30,000",
    priceNote: "~1 month delivery",
    timeline: "3–4 weeks",
    description: "Complete full stack solution with React frontend, Node.js backend, and a full-featured admin panel.",
    features: [
      "React frontend (user-facing)",
      "Node.js + Express backend",
      "MongoDB / MySQL database",
      "Admin panel with dashboard",
      "User management & roles",
      "Data handling & analytics",
      "JWT authentication",
      "3 revision rounds",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "E-Commerce",
    tag: "Enterprise",
    price: "₹35,000+",
    priceNote: "Custom quote",
    timeline: "4–6 weeks",
    description: "A fully featured e-commerce platform with storefront, cart, payments, and complete admin control.",
    features: [
      "Product catalog & detail pages",
      "Shopping cart & wishlist",
      "Stripe / Razorpay payments",
      "Order management system",
      "Admin: products, orders & users",
      "Inventory tracking",
      "Email notifications",
      "Unlimited revisions",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <>
      <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">

        {/* Background Gradient */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-400 tracking-widest uppercase">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg text-gray-400 sm:text-xl max-w-2xl mx-auto">
            Transparent, fixed pricing for every kind of project — from simple landing pages to full-scale platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative flex flex-col rounded-3xl p-8 ring-1 transition-all duration-300
                ${plan.highlight
                  ? "bg-gray-800 ring-indigo-500 shadow-xl shadow-indigo-500/20"
                  : "bg-white/5 ring-white/10 backdrop-blur-sm hover:ring-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-500/40">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">{plan.tag}</h3>
                <p className="mt-1 text-2xl font-bold text-white tracking-tight">{plan.name}</p>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="inline-flex w-fit items-center rounded-md bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  {plan.priceNote}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-400">{plan.timeline} delivery</span>
              </div>

              <div className="mt-5 border-t border-white/10" />
              <p className="mt-5 text-sm text-gray-400 leading-relaxed">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-0.5 flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/40">
                      <svg className="h-2.5 w-2.5 text-indigo-400" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(plan.name)}
                className={`
                  mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200
                  ${plan.highlight
                    ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/30"
                    : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            All prices are starting estimates.{" "}
            <button
              onClick={() => openModal("")}
              className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300 transition"
            >
              Contact me
            </button>{" "}
            for a custom quote. Free 30-min discovery call included.
          </p>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
      />
    </>
  );
}
