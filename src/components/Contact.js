import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Get the Formspree endpoint from environment variable or use fallback
    const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || "https://formspree.io/f/mnqelobo";

    if (!formspreeEndpoint) {
      setStatus({
        type: "error",
        message: "Form endpoint not configured. Please contact me directly via email.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="max-w-containerSmaller mx-auto py-20 lg:py-24 flex flex-col gap-10"
    >
      <SectionTitle title="Let's build together" titleNo="04" />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4 text-textDark">
          <h3 className="text-2xl font-titleFont font-semibold text-textLight">
            Tell me about your project
          </h3>
          <p className="leading-7">
            I work on modern web and mobile products, focusing on clean user
            journeys, robust integrations, and reliable delivery. Share what
            you're building—I'll get back within one business day.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-textGreen">Email:</span>{" "}
              <a
                className="hover:text-textGreen"
                href="mailto:pnpnelly@gmail.com"
              >
                pnpnelly@gmail.com
              </a>
            </p>
            <p>
              <span className="text-textGreen">Phone:</span> +27 78 152 6964
            </p>
            <p className="text-textGreen">
              Open to freelance, contract, and full-time opportunities.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#112240] border border-[#233554] rounded-lg p-6 space-y-4 shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-textLight">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-textLight focus:border-textGreen focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-textLight">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@email.com"
              className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-textLight focus:border-textGreen focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-textLight">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="What problem are you solving? Timeline? Budget?"
              className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-textLight focus:border-textGreen focus:outline-none"
              required
            />
          </div>
          {status.message && (
            <div
              className={`p-3 rounded-md text-sm ${
                status.type === "success"
                  ? "bg-green-900/30 text-green-400 border border-green-700"
                  : "bg-red-900/30 text-red-400 border border-red-700"
              }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
