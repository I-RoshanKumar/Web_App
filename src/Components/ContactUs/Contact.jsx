import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Form submitted successfully!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Query area</label>
        <textarea
          id="message"
          rows="3"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
