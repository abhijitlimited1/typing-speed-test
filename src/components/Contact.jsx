import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblgkpwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">Why Contact Us?</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">🚀 Feature Requests</h3>
              <p className="mt-2">
                Help shape the future of our typing platform
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">🛠 Technical Issues</h3>
              <p className="mt-2">Report bugs or unexpected behavior</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">💡 Partnerships</h3>
              <p className="mt-2">Explore collaboration opportunities</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields with value and onChange handlers */}
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          {submitStatus === "success" && (
            <div className="p-3 bg-green-800 text-green-200 rounded-lg">
              Message sent successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 bg-red-800 text-red-200 rounded-lg">
              Error sending message. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
