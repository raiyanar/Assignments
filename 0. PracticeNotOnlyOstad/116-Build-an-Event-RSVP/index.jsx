const { useState } = React;

export function EventRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: 1,
    dietary: "",
    extraGuests: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Event RSVP</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="attendees">Number of attendees</label>
          <input
            id="attendees"
            name="attendees"
            type="number"
            min="1"
            value={formData.attendees}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dietary">Dietary preferences (optional)</label>
          <input
            id="dietary"
            name="dietary"
            type="text"
            value={formData.dietary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="extraGuests">
            <input
              id="extraGuests"
              name="extraGuests"
              type="checkbox"
              checked={formData.extraGuests}
              onChange={handleChange}
            />
            Bringing additional guests
          </label>
        </div>

        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div id="confirmation">
          <h2>RSVP Submitted!</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Number of attendees: {formData.attendees}</p>
          <p>Dietary preferences: {formData.dietary || "None"}</p>
          <p>
            Bringing additional guests: {formData.extraGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
