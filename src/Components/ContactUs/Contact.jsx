import React from 'react'

function Contact() {
  return (
    <>
<div className="mb-6">
  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
  <input type="string" id="name" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>
<div className="mb-6">
  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email address</label>
  <input type="email" id="email" placeholder="name@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>

<div className="mb-6">
  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Query area</label>
  <textarea id="message" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
</div>

<button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  Submit
</button>

    </>
  )
}

export default Contact
