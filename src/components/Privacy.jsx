const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-gray-300">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white">
            Why This Matters
          </h2>
          <p className="mt-2">
            In today's digital world, your typing patterns could reveal more
            than you think. While we don't store any data, here's how we protect
            you:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>No keystroke logging</li>
            <li>No session recording</li>
            <li>No third-party tracking</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8">
          Real-World Protection
        </h2>
        <p>
          Unlike many typing tutors, we never sell or share data. Your practice
          sessions stay private, just like they would in a physical classroom.
        </p>

        {/* Keep existing sections */}

        <div className="bg-gray-800 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-white">Did You Know?</h3>
          <p className="mt-2">
            Many typing sites use your practice sessions to build advertising
            profiles. We believe your learning journey should remain private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
