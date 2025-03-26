const FAQ = () => {
  const faqs = [
    {
      question: "How is typing speed calculated?",
      answer:
        "We calculate words per minute (WPM) by counting correct words typed divided by time in minutes.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you can use all features without registration.",
    },
    {
      question: "Are my test results stored?",
      answer:
        "Results are stored temporarily in your browser but not on our servers.",
    },
    {
      question: "Can I practice in different languages?",
      answer:
        "Yes, we support multiple languages through our language selector.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">FAQ</h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-6">
            <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
            <p className="mt-2 text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
