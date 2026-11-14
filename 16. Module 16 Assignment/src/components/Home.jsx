function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Home Page</h2>
          <p className="text-gray-600">This is the home section with a welcome message.</p>
        </div>
      </section>
      <section className="bg-white p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us Section</h2>
          <p className="text-gray-600">This section tells you about our company.</p>
        </div>
      </section>
      <section className="bg-gray-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services Section</h2>
          <p className="text-gray-600">This section shows what services we offer.</p>
        </div>
      </section>
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Info Section</h2>
          <p className="text-gray-600">This section has our contact information.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
