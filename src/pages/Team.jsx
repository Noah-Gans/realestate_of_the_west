import './Team.css'

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Lynn Ritter",
      role: "Responsible Broker / Appraiser",
      phone: "307.851.0881",
      email: "REofthewest@gmail.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      id: 2,
      name: "Cody Renner",
      role: "Licensed Salesperson / Agent",
      phone: "307.438.1577",
      email: "CodyLandSales@gmail.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 3,
      name: "Bonnie Kirk",
      role: "Licensed Salesperson / Agent",
      phone: "678.570.3486",
      email: "bonnie@realestateofthewest.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ]

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="container">
          <h1>Meet Your Team</h1>
          <p>Real Estate of the West, Inc.</p>
        </div>
      </div>

      <div className="team-content">
        <div className="container">
          <div className="team-intro">
            <h2>Our Expert Team</h2>
            <p>We're dedicated to helping you find your dream home or sell your property with confidence. Our experienced team brings years of local knowledge and expertise to every transaction.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-contact">
                    <a href={`tel:${member.phone.replace(/\./g, '')}`} className="contact-link">
                      <span className="contact-icon">📞</span>
                      {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="contact-link">
                      <span className="contact-icon">✉️</span>
                      {member.email}
                    </a>
                  </div>
                  <button className="contact-btn">Contact Me</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

