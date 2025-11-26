import { useState, useEffect, useRef } from 'react'
import './Sell.css'

function Sell() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:REofthewest@gmail.com?subject=Selling Inquiry&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
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

      {/* Cover Section */}
      <section className="guide-cover">
        <div className="cover-content">
          <div className="cover-sidebar">
            <div className="sidebar-text">REAL ESTATE LISTING - JANUARY 2025</div>
          </div>
          <div className="cover-main">
            <h2 className="cover-title">Real Estate of the West, Inc.</h2>
            <h3 className="cover-subtitle">Listing Guide</h3>
            <div className="cover-illustration">
              <div className="cowboy-illustration">🤠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Your Home Section */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="content-section pricing-section"
      >
        <div className="section-sidebar"></div>
        <div className="section-content">
          <div className="section-header">
            <h2>Pricing Your Home</h2>
            <p className="section-intro">
              Perhaps the most challenging aspect of selling a home is listing it at the correct price. 
              It's one of several areas where the assistance of a skilled real estate agent can more than pay for itself.
            </p>
          </div>

          <div className="guide-section">
            <div className="section-number">01</div>
            <div className="section-text">
              <h3>Activity versus Timing</h3>
              <p>
                The real estate market is characterized by activity. Properties attract the most interest 
                when they are first listed. This is when they are fresh, new, and exciting to potential buyers. 
                Setting a realistic price from the beginning is crucial to leverage this initial period for a timely sale.
              </p>
            </div>
          </div>

          <div className="guide-section">
            <div className="section-number">02</div>
            <div className="section-text">
              <h3>Timing versus Selling Price</h3>
              <p>
                If a home is overpriced, it misses the critical initial selling period. When a property sits 
                on the market for too long, potential buyers begin to wonder what's wrong with it. This often 
                leads to subsequent price reductions and an eventual sale price below the initial listing or even 
                market value. The longer a property remains unsold, the more it costs the seller in terms of both 
                time and money.
              </p>
            </div>
          </div>

          <div className="guide-section">
            <div className="section-number">03</div>
            <div className="section-text">
              <h3>Determining Your Home's Market Value</h3>
              <p>
                A comprehensive market analysis is essential to determine residential property value. Location and 
                property characteristics are key factors. The analysis considers recent sales of comparable properties 
                to find a price that attracts a willing buyer in a reasonable time. The offering price should generally 
                not exceed the determined value by more than 5%, as potential buyers might not even make offers otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guidelines Section */}
      <section 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="content-section guidelines-section"
      >
        <div className="section-sidebar"></div>
        <div className="section-content">
          <h2 className="section-title-white">Pricing Guidelines</h2>

          <div className="guide-section">
            <div className="section-number">04</div>
            <div className="section-text">
              <h3>Too high can be as bad as too low</h3>
              <p>
                Setting a listing price too high can deter potential buyers, cause offers to not come in, and lead 
                to lost exposure even if the price is later corrected. An overpriced home may sit on the market for 
                months, becoming stale and less attractive to buyers. It's important to price competitively from the start.
              </p>
            </div>
          </div>

          <div className="guide-section">
            <div className="section-number">05</div>
            <div className="section-text">
              <h3>Listing Price</h3>
              <p>
                Setting a listing price can be challenging, especially in fluctuating markets. An experienced real 
                estate agent who understands market trends, local conditions, and buyer psychology can help you find 
                the sweet spot—a price that's competitive yet maximizes your return. They bring valuable insights from 
                recent transactions and current market dynamics.
              </p>
            </div>
          </div>

          <div className="guide-section">
            <div className="section-number">06</div>
            <div className="section-text">
              <h3>How to work with your real estate agent</h3>
              <ol className="numbered-list">
                <li>If selling, create an information sheet listing home features and qualities that make your property unique.</li>
                <li>When selling, discuss cosmetic improvements like fresh paint or new carpet with the agent. Small updates can significantly impact buyer appeal.</li>
                <li>If selling, keep the home clean by eliminating cobwebs and dust, wiping bathroom counters and mirrors, and vacuuming/sweeping daily. First impressions matter.</li>
                <li>If buying, create a prioritized list of wants (1-10) to help the agent research efficiently and focus on properties that truly match your needs.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Curb Appeal Section */}
      <section 
        ref={(el) => (sectionsRef.current[2] = el)}
        className="content-section curb-appeal-section"
      >
        <div className="section-sidebar"></div>
        <div className="section-content">
          <h2 className="section-title-white">Curb Appeal</h2>

          <div className="guide-section">
            <div className="section-number">07</div>
            <div className="section-text">
              <h3>First Impressions Count</h3>
              <p>
                The exterior of your home is the first thing potential buyers see. A well-maintained lawn, trimmed 
                shrubs, fresh paint, and a welcoming entryway can significantly increase buyer interest. Consider 
                power washing the exterior, updating the front door, and ensuring the landscaping is neat and inviting.
              </p>
            </div>
          </div>

          <div className="guide-section">
            <div className="section-number">08</div>
            <div className="section-text">
              <h3>Staging Your Home</h3>
              <p>
                Professional staging can help buyers visualize themselves living in your home. Remove personal items, 
                declutter spaces, and arrange furniture to maximize the sense of space and flow. Neutral colors and 
                minimal decor allow buyers to imagine their own style in the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food For Thought Section */}
      <section 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="content-section food-for-thought-section"
      >
        <div className="section-sidebar"></div>
        <div className="section-content">
          <h2 className="section-title-dark">Food For Thought</h2>
          <div className="thoughts-list">
            <div className="thought-item">
              <span className="thought-number">1</span>
              <p>Hiring a Realtor provides a strong advantage. Full-time professionals bring expertise, market knowledge, and negotiation skills that can make a significant difference in your transaction.</p>
            </div>
            <div className="thought-item">
              <span className="thought-number">2</span>
              <p>The real estate agent serves as an authority and guide, but remember: you, the client, have the final word on all decisions. Your agent is there to advise and support your choices.</p>
            </div>
            <div className="thought-item">
              <span className="thought-number">3</span>
              <p>A residence is typically the biggest single investment most people make. Buy and sell wisely—take time to understand the market, ask questions, and make informed decisions.</p>
            </div>
            <div className="thought-item">
              <span className="thought-number">4</span>
              <p>The importance of a clean, organized, accessible office environment with pleasant and helpful staff cannot be overstated. This reflects the professionalism and care you'll receive throughout your transaction.</p>
            </div>
            <div className="thought-item">
              <span className="thought-number">5</span>
              <p>Remember that home values fluctuate with the economy. Market conditions change, and what's true today may be different tomorrow. Work with professionals who understand these dynamics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2>Contact Details</h2>
            <p className="contact-subtitle">For bookings and viewings</p>
          </div>
          <div className="contact-info-grid">
            <div className="contact-item">
              <h3>ONLINE FORM</h3>
              <a href="https://www.realestateofthewest.com">www.realestateofthewest.com</a>
            </div>
            <div className="contact-item">
              <h3>MOBILE PHONE</h3>
              <a href="tel:307-851-0881">307-851-0881</a>
            </div>
            <div className="contact-item">
              <h3>EMAIL ADDRESS</h3>
              <a href="mailto:Lynn@realestateofthewest.com">Lynn@realestateofthewest.com</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Feel free to contact us anytime for help with selling your home in Wyoming!</h2>
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
      </section>
    </div>
  )
}

export default Sell
