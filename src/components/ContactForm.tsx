import React, { useState } from "react";
import { Send, CheckCircle, Mail, User, BookOpen, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Static site: no backend. Compose the message and hand it off to the
    // visitor's default email client, addressed directly to Arindam.
    const subject = formData.subject || `Portfolio message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl =
      `mailto:${portfolioData.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-9 pr-3 py-2 text-sm outline-none focus:border-zinc-400 focus:bg-white transition";

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-6 lg:p-8">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
          role="status"
        >
          <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200">
            <CheckCircle className="w-8 h-8" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Almost there!</h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              Your email client should have opened with the message pre-filled and addressed to{" "}
              <span className="font-semibold text-zinc-800">{portfolioData.email}</span>. Just hit
              send! If nothing opened, you can email me directly at that address.
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition text-sm font-medium cursor-pointer"
          >
            Write Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Send a message</h3>
            <p className="text-xs text-zinc-500 leading-normal">
              Have a role, an idea, or a research question? I'd love to hear from you.
            </p>
          </div>

          {error && (
            <div
              className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-medium"
              role="alert"
            >
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-semibold text-zinc-700">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-zinc-400">
                  <User className="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ada Lovelace"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-700">
                Your Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-zinc-400">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ada@example.com"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700">
              Subject
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-zinc-400">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
              </span>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration / Opportunity"
                className={inputClass}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-semibold text-zinc-700">
              Message <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-zinc-400">
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
              </span>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition font-medium text-sm disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <span
                  className="w-4 h-4 border-2 border-zinc-400 border-t-white rounded-full animate-spin"
                  aria-hidden="true"
                ></span>
                <span>Opening your email client…</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
