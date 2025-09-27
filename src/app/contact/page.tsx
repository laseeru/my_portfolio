"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import siteData from "../../../content/site.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message || formData.message.length < 20) {
      setSubmitMessage("Please fill in all fields and write at least 20 characters in your message.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(siteData.contact.success);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
          {siteData.contact.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a
                  href={siteData.links.email}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {siteData.email}
                </a>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <a
                  href={siteData.links.linkedin}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">GitHub</h3>
                <a
                  href={siteData.links.github}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my code
                </a>
              </div>

              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-neutral-700 dark:text-neutral-300">{siteData.location}</p>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6">
              <h3 className="font-medium mb-3">What I&apos;m Looking For</h3>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• Mentors in AI healthcare implementation</li>
                <li>• Collaborators on low-resource healthcare projects</li>
                <li>• Clinical partners for validation studies</li>
                <li>• Research opportunities and funding</li>
                <li>• Speaking engagements and conferences</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project, collaboration idea, or just say hello..."
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Minimum 20 characters ({formData.message.length}/20)
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitMessage === siteData.contact.success 
                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
          <h3 className="font-medium mb-2">Response Time</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            I typically respond to messages within 24-48 hours. For urgent matters, 
            please mention it in your message subject or content.
          </p>
        </div>
      </section>
    </Layout>
  );
}
