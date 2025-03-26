const TimerSelector = ({ selectedTime, setSelectedTime }) => {
  const times = [60, 180, 300];

  return (
    <div className="flex gap-4 justify-center my-8">
      {times.map((time) => (
        <button
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`px-6 py-2 rounded-lg transition-all ${
            selectedTime === time
              ? "bg-blue-600 scale-110"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {time / 60} min
        </button>
      ))}
    </div>
  );
};

export default TimerSelector;
