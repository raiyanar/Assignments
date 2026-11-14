function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to About Page</h2>
          <p className="text-gray-600">This is the about section with company information.</p>
        </div>
      </section>
      <section className="bg-white p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our History Section</h2>
          <p className="text-gray-600">This section tells you about our company history.</p>
        </div>
      </section>
      <section className="bg-gray-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team Section</h2>
          <p className="text-gray-600">This section introduces our team members.</p>
        </div>
      </section>
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission Section</h2>
          <p className="text-gray-600">This section explains our mission and values.</p>
        </div>
      </section>
    </div>
  )
}

export default About