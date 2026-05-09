import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // basic validation
    if (!name || !email || !message) {
      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 3000);

      return;
    }

    setStatus("sending");

    // your WhatsApp number
    const phoneNumber = "27679524920";

    // formatted WhatsApp message
    const whatsappMessage = `
      Hi Lelona,

      My name is ${name}.

      Email: ${email}

      Subject: ${subject || "No subject"}

      Message:
      ${message}

      Sent from your portfolio website.
          `;

    // encode for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // show popup
    setStatus("sent");

    // reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // open WhatsApp after delay
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 800);

    // hide popup
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  }

  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-light dark:bg-dark text-light dark:text-dark">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        Contact Me
      </h2>

      <p className="text-lg mb-8 max-w-2xl">
        For any inquiries, collaborations, freelance work, or just to say
        hello, feel free to reach out using the form below.
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-8 rounded-2xl shadow-lg w-full max-w-2xl bg-gray-500"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              autoComplete="off"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 text-black px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              autoComplete="off"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 text-black px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Subject
            </label>

            <input
              type="text"
              autoComplete="off"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 text-black px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              autoComplete="off"
              className="w-full h-32 resize-none rounded-xl border border-gray-300 bg-gray-100 text-black px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-60 transition-all duration-300 shadow-md"
            >
              <FaWhatsapp className="text-lg" />

              {status === "sending"
                ? "Opening..."
                : "Send via WhatsApp"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {status === "sent" && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
            <h3 className="text-lg font-semibold text-black">
              Opening WhatsApp...
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Redirecting you to WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {status === "error" && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
            <h3 className="text-lg font-semibold text-black">
              ⚠️ Missing Information
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Please fill in all required fields.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}