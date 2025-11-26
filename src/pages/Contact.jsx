import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:REofthewest@gmail.com?subject=Contact from Website&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Your Dream Home Is One Step Away!</h1>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <a href="tel:1-307-851-0881">1-307-851-0881</a>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Find Us</h3>
              <p>455 Main Street</p>
              <p>Lander, WY 82520</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <a href="mailto:REofthewest@gmail.com">REofthewest@gmail.com</a>
            </div>
          </div>

          <div className="map-section">
            <h2>Visit Our Office</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.1234567890123!2d-108.7306!3d42.8331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8758a3b3c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2s455%20Main%20St%2C%20Lander%2C%20WY%2082520!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Real Estate of the West Office Location"
              />
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Feel free to contact us anytime for help with buying or selling your home in Wyoming!</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">First and Last Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

