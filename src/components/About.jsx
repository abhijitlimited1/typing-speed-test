const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">About Us</h1>

      <div className="space-y-6 text-gray-300">
        <p>
          Welcome to TypeMaster, your premier destination for improving typing
          speed and accuracy. Founded in 2023, our mission is to help users
          enhance their typing skills through interactive tests and real-time
          feedback.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8">Our Features</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Real-time typing analytics</li>
          <li>Multiple language support</li>
          <li>Customizable test durations</li>
          <li>Detailed performance reports</li>
          <li>Mobile-friendly design</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8">Our Team</h2>
        <p>
          We're a passionate group of developers, designers, and language
          enthusiasts dedicated to creating the best typing practice platform.
        </p>
      </div>
    </div>
  );
};

export default About;
