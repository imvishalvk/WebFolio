import React, { useState, useEffect } from "react";

const PLANS = [
  { name: "Landing Page",   price: "₹5,000",         note: "Fixed · 3–5 days" },
  { name: "React SPA",      price: "₹15,000",         note: "Based on scope · 1–3 weeks" },
  { name: "Full Stack App", price: "₹20,000–30,000",  note: "~1 month delivery" },
  { name: "E-Commerce",     price: "₹35,000+",        note: "Custom quote · 4–6 weeks" },
];

function ContactModal({ isOpen, onClose, planName }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", company: "",
    email: "", phone: "", message: "", agreed: false,
    selectedPlan: planName || "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, selectedPlan: planName || "" }));
  }, [planName, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your email/backend here
    alert(`Message sent! We'll get back to you about the ${formData.selectedPlan || "selected"} plan.`);
    onClose();
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal Box */}
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-white/10">

        {/* Gradient blob */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-20 -z-10 overflow-hidden blur-3xl pointer-events-none">
          <div
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            className="mx-auto aspect-[1155/678] w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>

        <div className="px-6 py-10 sm:px-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl p-1 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's Get Started
            </h2>
            {/* {planName && (
              <p className="mt-2 text-sm text-indigo-400 font-medium">
                Enquiring about: <span className="text-indigo-300 font-semibold">{planName}</span>
              </p>
            )} */}
            <p className="mt-2 text-base text-gray-400">
              Fill in your details and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Plan Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Select a Plan
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PLANS.map((plan) => {
                  const isSelected = formData.selectedPlan === plan.name;
                  return (
                    <button
                      key={plan.name}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, selectedPlan: plan.name }))}
                      className={`
                        relative flex flex-col items-start text-left px-4 py-3 rounded-xl border transition-all duration-200
                        ${isSelected
                          ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        }
                      `}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500">
                          <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                          </svg>
                        </span>
                      )}
                      <span className={`text-sm font-semibold ${isSelected ? "text-indigo-300" : "text-white"}`}>
                        {plan.name}
                      </span>
                      <span className={`text-base font-bold mt-0.5 ${isSelected ? "text-indigo-400" : "text-gray-300"}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">{plan.note}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 mb-6" />

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">

              <div>
                <label className="block text-sm font-semibold text-white mb-2">First name</label>
                <input
                  type="text" name="firstName" value={formData.firstName}
                  onChange={handleChange} required placeholder="John"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Last name</label>
                <input
                  type="text" name="lastName" value={formData.lastName}
                  onChange={handleChange} placeholder="Doe"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">Company <span className="text-gray-500 font-normal">(optional)</span></label>
                <input
                  type="text" name="company" value={formData.company}
                  onChange={handleChange} placeholder="Your company"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} required placeholder="you@example.com"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">Phone number <span className="text-gray-500 font-normal">(optional)</span></label>
                <input
                  type="tel" name="phone" value={formData.phone}
                  onChange={handleChange} placeholder="+91 98765 43210"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message" value={formData.message}
                  onChange={handleChange} rows="4" required
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 resize-none"
                />
              </div>

              <div className="flex gap-x-4 sm:col-span-2">
                <input
                  id="agreed" type="checkbox" name="agreed"
                  checked={formData.agreed} onChange={handleChange} required
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-white/5 accent-indigo-500 cursor-pointer"
                />
                <label htmlFor="agreed" className="text-sm text-gray-400 cursor-pointer">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300 transition">
                    privacy policy
                  </a>.
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send Message →
              </button>
              <button
                type="button" onClick={onClose}
                className="flex-1 rounded-md bg-white/5 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-300 hover:bg-white/10 transition ring-1 ring-white/10"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
