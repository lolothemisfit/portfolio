import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error("Network response not ok");

      // success: show popup and reset form
      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // auto-hide popup after 3s
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  }

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-light dark:bg-dark text-light dark:text-dark">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact Me</h2>
      <p className="text-lg text-light dark:text-dark mb-8"> For any inquiries, collaborations, or just to say hello, feel free to reach out using the form below. I look forward to connecting with you!</p>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg shadow-md md:w-1/2 w-3/4 items-center justify-center bg-gray-500">
        <div>
          <label className="block text-sm font-medium text-light dark:text-dark">Name</label>
          <input
            className="mt-1 block md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="justify-center items-center">
          <label className="block text-sm font-medium text-light dark:text-dark">Email</label>
          <input
            type="email"
            className="mt-1 block md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-light dark:text-dark">Subject</label>
          <input
            className="mt-1 block md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-200"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-light dark:text-dark">Message</label>
          <textarea
            className="mt-1 block md:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-32 bg-gray-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      </div>
      {status === "sent" && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h3 className="text-lg font-semibold">Message sent!</h3>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h3 className="text-lg font-semibold">⚠️..</h3>
            <p className="mt-2 text-sm text-gray-600">Something went wrong. Try again later.</p>
          </div>
        </div>
      )}
    </section>
  );
}
