function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Contact Page</h2>
          <p className="text-gray-600">This is the contact section with ways to reach us.</p>
        </div>
      </section>
      <section className="bg-white p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Email Us Section</h2>
          <p className="text-gray-600">This section has our email address.</p>
        </div>
      </section>
      <section className="bg-gray-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Call Us Section</h2>
          <p className="text-gray-600">This section has our phone number.</p>
        </div>
      </section>
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us Section</h2>
          <p className="text-gray-600">This section has our office address.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact