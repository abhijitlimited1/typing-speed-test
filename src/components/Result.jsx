const Result = ({ result, onTryAgain }) => {
  const handleShare = async () => {
    const shareData = {
      title: "Typing Test Results",
      text: `I just typed ${result.wpm} WPM with ${result.accuracy}% accuracy! Try it yourself:`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `WPM: ${result.wpm} | Accuracy: ${result.accuracy}% | Mistakes: ${result.mistakes}`
        );
        alert("Results copied to clipboard!");
      }
    } catch (err) {
      console.log("Sharing failed", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Test Results
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-8 text-left">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-gray-400 text-sm">Speed</div>
          <div className="text-3xl font-bold text-blue-400">
            {result.wpm} WPM
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-gray-400 text-sm">Accuracy</div>
          <div className="text-3xl font-bold text-purple-400">
            {result.accuracy}%
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-gray-400 text-sm">Total Words</div>
          <div className="text-3xl font-bold text-green-400">
            {result.totalWords}
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="text-gray-400 text-sm">Mistakes</div>
          <div className="text-3xl font-bold text-red-400">
            {result.mistakes}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onTryAgain}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all transform hover:scale-105"
        >
          Try Again
        </button>

        <button
          onClick={handleShare}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
};

export default Result;
