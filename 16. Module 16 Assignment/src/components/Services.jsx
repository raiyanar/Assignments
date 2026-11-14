function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Services Page</h2>
          <p className="text-gray-600">This is the services section showing what we do.</p>
        </div>
      </section>
      <section className="bg-white p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Web Development Section</h2>
          <p className="text-gray-600">This section describes our web development service.</p>
        </div>
      </section>
      <section className="bg-gray-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mobile Apps Section</h2>
          <p className="text-gray-600">This section describes our mobile app service.</p>
        </div>
      </section>
      <section className="bg-blue-50 p-8 flex justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Section</h2>
          <p className="text-gray-600">This section describes our support service.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
