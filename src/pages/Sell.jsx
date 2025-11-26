import { useState } from 'react'
import './Sell.css'

function Sell() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:REofthewest@gmail.com?subject=Selling Inquiry&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="sell-page">
      <div className="page-header">
        <div className="container">
          <h1>SELL</h1>
          <p>Learn more about selling your home</p>
        </div>
      </div>

      <div className="sell-content">
        <div className="container">
          <div className="sell-intro">
            <h2>Your Guide to Selling Your Home</h2>
            <p>Download our comprehensive seller's guide to learn everything you need to know about the selling process.</p>
          </div>

          <div className="guide-section">
            <div className="guide-card">
              <div className="guide-icon">📄</div>
              <h3>Seller's Guide</h3>
              <p>Get expert tips and insights on preparing your home for sale, pricing strategies, and navigating the selling process.</p>
              <a 
                href="/sellers-guide.pdf" 
                download 
                className="download-btn"
              >
                Download Seller's Guide PDF
              </a>
            </div>
          </div>

          <div className="selling-process">
            <h2>Our Selling Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>We'll meet with you to understand your goals and timeline for selling your property.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Property Evaluation</h3>
                <p>Our team will conduct a thorough evaluation to determine the best listing price for your home.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Marketing Strategy</h3>
                <p>We'll create a comprehensive marketing plan to showcase your property to potential buyers.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Showings & Negotiations</h3>
                <p>We'll handle all showings and negotiate on your behalf to get you the best possible price.</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Closing</h3>
                <p>We'll guide you through the closing process to ensure a smooth transaction.</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Ready to Sell Your Home?</h2>
            <p>Feel free to contact us anytime for help with selling your home in Wyoming!</p>
            <form onSubmit={handleSubmit} className="contact-form">
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
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sell

