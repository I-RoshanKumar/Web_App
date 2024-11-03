function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our platform! We are dedicated to providing the best service possible. Our mission is to deliver quality and excellence in everything we do, ensuring customer satisfaction and value in every interaction.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our team is passionate, skilled, and ready to assist you with your needs. With years of experience and a commitment to continuous improvement, we strive to be the best in our field.
        </p>
        <button
          className="px-6 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
