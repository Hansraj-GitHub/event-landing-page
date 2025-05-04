import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";import DiscoverEvents from "./DiscoverEvents";
import "./App.css";
import "../public/images/421222A0-8D08-4641-B0EF-E46EC6C2A745_1_201_a.jpeg"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSct-EtNLyOj9h4NFz4bdwTM94qdomVDn7EujhsB71wVKp1ZZQ/formResponse";
    const formDataToSend = new FormData();
    formDataToSend.append("entry.1955455154", formData.name);    // Full Name
    formDataToSend.append("entry.1559130259", formData.email);   // Email
    formDataToSend.append("entry.1402769561", formData.contact); // Contact Number
    formDataToSend.append("entry.1919880542", formData.college); // College
    formDataToSend.append("entry.894938777", formData.branch);   // Branch
    formDataToSend.append("entry.2135195313", formData.year);    // Year

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    }).then(() => {
      alert("Form submitted!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        college: "",
        branch: "",
        year: "",
      });
    });
  };

  return (
    <Router>
      <div className="bg-pattern min-h-screen p-4">
        {/* Navbar */}
        <nav style={{background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,64,175,0.08)', padding: '1rem 2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontWeight: 700, fontSize: 22, color: '#2563eb'}}>Hansraj</span>
          <Link to="/discover" style={{background: '#2563eb', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none'}}>Explore Event</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="event-container">
              {/* Left: Poster & Details */}
              <div className="event-left">
                <img
                  src=""
                  alt="AI Workshop Series Poster"
                  className="event-poster"
                />
                <div className="event-details">
                  <div><strong>Date:</strong> May 25-27, 2025</div>
                  <div><strong>Time:</strong> 10:00 AM - 4:00 PM</div>
                  <div><strong>Venue:</strong> Seminar Hall</div>
                  <div><strong>Capacity:</strong> 80 attendees</div>
                </div>
                <div style={{marginBottom: '1.5rem'}}>
                  <div style={{fontWeight: 600, color: '#64748b', marginBottom: 4}}>Hosted By</div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <img src="https://ui-avatars.com/api/?name=Hansraj&background=2563eb&color=fff" alt="Hansraj" style={{width: 32, height: 32, borderRadius: '50%'}} />
                    <span style={{fontWeight: 500, color: '#2563eb'}}>Hansraj</span>
                  </div>
                </div>
                <div style={{fontSize: '0.95rem', color: '#64748b'}}>566 Went</div>
                <div style={{display: 'flex', margin: '8px 0 0 0'}}>
                  {/* Example avatars */}
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="attendee1" style={{width: 28, height: 28, borderRadius: '50%', marginRight: -8, border: '2px solid #fff'}} />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="attendee2" style={{width: 28, height: 28, borderRadius: '50%', marginRight: -8, border: '2px solid #fff'}} />
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="attendee3" style={{width: 28, height: 28, borderRadius: '50%', marginRight: -8, border: '2px solid #fff'}} />
                  <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="attendee4" style={{width: 28, height: 28, borderRadius: '50%', marginRight: -8, border: '2px solid #fff'}} />
                  <span style={{marginLeft: 12, color: '#64748b', fontWeight: 500}}>+562 others</span>
                </div>
              </div>
              {/* Right: Main Content */}
              <div className="event-right">
                <div className="event-title">AI Workshop Series</div>
                <div className="event-date-time">
                  <span style={{display: 'flex', alignItems: 'center'}}>
                    <svg width="20" height="20" fill="#2563eb" style={{marginRight: 4}} viewBox="0 0 20 20"><path d="M6 2a1 1 0 1 1 2 0v1h4V2a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3V2a1 1 0 1 1 2 0v1zm-1 5v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H5zm2 2h2v2H7V9zm4 0h2v2h-2V9z"/></svg>
                    May 25-27, 2025
                  </span>
                  <span>10:00 AM - 4:00 PM</span>
                  <span>Seminar Hall</span>
                </div>
                <div className="event-platform">
                  <svg width="20" height="20" fill="#2563eb" style={{marginRight: 4, verticalAlign: 'middle'}} viewBox="0 0 20 20"><path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884zM18 8.118l-8 5-8-5V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"/></svg>
                  Onsite Event
                </div>
                <div className="registration-card">
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 8}}>Registration</div>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="College"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      placeholder="Branch"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="Year"
                      className="p-3 border rounded-lg"
                      required
                    />
                    <button
                      type="submit"
                      className="col-span-1 md:col-span-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      Register
                    </button>
                  </form>
                </div>
                <div className="about-section">
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 8}}>About This Event</div>
                  <div style={{color: '#475569', marginBottom: 16}}>
                    🎓 Dive deep into the world of artificial intelligence and machine learning in this intensive three-day workshop.<br/>
                    Learn fundamental concepts, practical applications, and hands-on implementation of AI algorithms.<br/>
                    Perfect for students, professionals, and enthusiasts looking to build a strong foundation in AI.
                  </div>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>Session Highlights</div>
                  <ul style={{color: '#475569', marginBottom: 16, paddingLeft: 20}}>
                    <li>• Introduction to AI & Machine Learning</li>
                    <li>• Hands-on coding sessions</li>
                    <li>• Real-world AI applications</li>
                    <li>• Expert talks and Q&A</li>
                    <li>• Networking opportunities</li>
                  </ul>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>About Hansraj Yadav</div>
                  <div style={{color: '#475569', marginBottom: 16}}>
                    I am a student of Chandigarh Engineering College, pursuing MCA (2023-2025 batch).<br/>
                    I graduated with a BCA from M.B.U Bhagalpur (2018-2021).<br/>
                    Passionate about technology, coding, and sharing knowledge with peers.
                  </div>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>Event Details</div>
                  <ul style={{color: '#475569', marginBottom: 16, paddingLeft: 20}}>
                    <li>• Date: May 25-27, 2025</li>
                    <li>• Time: 10:00 AM - 4:00 PM</li>
                    <li>• Venue: Seminar Hall</li>
                    <li>• Capacity: 80 attendees</li>
                  </ul>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>Who Should Attend?</div>
                  <ul style={{color: '#475569', marginBottom: 16, paddingLeft: 20}}>
                    <li>• Students interested in AI/ML</li>
                    <li>• Professionals seeking to upskill</li>
                    <li>• Enthusiasts and beginners in tech</li>
                    <li>• Anyone curious about the future of AI</li>
                  </ul>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>Don't Miss Out!</div>
                  <div style={{color: '#475569', marginBottom: 16}}>
                    Secure your spot now and be part of an exciting journey into AI. Limited seats available!
                  </div>
                  <div style={{fontWeight: 600, color: '#334155', marginBottom: 4}}>Connect With Us</div>
                  <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{color: '#25D366', fontSize: 24}}><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" title="Twitter" style={{color: '#1DA1F2', fontSize: 24}}><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" title="Instagram" style={{color: '#E1306C', fontSize: 24}}><i className="fab fa-instagram"></i> Instagram</a>
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" title="Telegram" style={{color: '#0088cc', fontSize: 24}}><i className="fab fa-telegram"></i> Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/discover" element={<DiscoverEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
