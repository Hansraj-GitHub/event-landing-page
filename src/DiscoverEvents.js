import React from "react";

const categories = [
  { name: "AI", count: "1K Events" },
  { name: "Arts & Culture", count: "1K Events" },
  { name: "Climate", count: "480 Events" },
  { name: "Fitness", count: "819 Events" },
  { name: "Wellness", count: "2K Events" },
  { name: "Crypto", count: "1K Events" },
];

const featuredCalendars = [
  { name: "Reading Rhythms Global", desc: "Not a book club. A reading party. Read with friends to live music & curated playlists!", avatar: "https://ui-avatars.com/api/?name=Reading+Rhythms" },
  { name: "ADPList", desc: "Your one-stop-shop for all things happening in the ADPList Community! We feature local meetups, ADPeople chapter events, and official events from ADPList HQ.", avatar: "https://ui-avatars.com/api/?name=ADPList" },
  { name: "Build Club", desc: "Sydney · The best place in the world to learn AI. Curated with 💜 by the Build Club team", avatar: "https://ui-avatars.com/api/?name=Build+Club" },
  { name: "Her Workplace", desc: "The career network for the next generation of women and non-binary leaders with inclusive in-person and virtual places to share stories, build relationships, and exchange knowledge.", avatar: "https://ui-avatars.com/api/?name=Her+Workplace" },
  { name: "Design Buddies", desc: "Events for designers and all creatives across SF, online, and the world! Hosted curated by Design Buddies, the world's largest design community.", avatar: "https://ui-avatars.com/api/?name=Design+Buddies" },
  { name: "South Park Commons", desc: "South Park Commons helps you get from -1 to 0. To learn more or apply, visit southparkcommons.com.", avatar: "https://ui-avatars.com/api/?name=South+Park+Commons" },
  { name: "The GenAI Collective", desc: "The world's largest AI community: 40,000+ pioneers – founders, researchers, operators, & investors – exploring the technological frontier.", avatar: "https://ui-avatars.com/api/?name=GenAI+Collective" },
  { name: "Generative AI San Francisco and Bay Area", desc: "San Francisco · GenerativeAISF.com In-person AI events. Subscribe for a weekly events email.", avatar: "https://ui-avatars.com/api/?name=Generative+AI+SF" },
];

const localEvents = [
  { city: "Bangkok", count: 12 },
  { city: "Bengaluru", count: 28 },
  { city: "Dubai", count: 21 },
  { city: "Ho Chi Minh City", count: 12 },
  { city: "Hong Kong", count: 8 },
  { city: "Honolulu", count: 3 },
  { city: "Jakarta", count: 13 },
  { city: "Kuala Lumpur", count: 11 },
  { city: "Manila", count: 10 },
  { city: "Melbourne", count: 24 },
  { city: "Mumbai", count: 14 },
  { city: "New Delhi", count: 8 },
  { city: "Seoul", count: 12 },
  { city: "Singapore", count: 33 },
  { city: "Sydney", count: 20 },
  { city: "Taipei", count: 8 },
  { city: "Tel Aviv-Yafo", count: 25 },
  { city: "Tokyo", count: 32 },
];

export default function DiscoverEvents() {
  return (
    <div style={{maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(30,64,175,0.08)', padding: '2rem'}}>
      <h1 style={{fontSize: '2.2rem', fontWeight: 700, color: '#1e293b', marginBottom: 8}}>Discover Events</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Explore popular events near you, browse by category, or check out some of the great community calendars.</p>
      <h2 style={{fontSize: '1.3rem', fontWeight: 600, color: '#2563eb', marginBottom: 8}}>Browse by Category</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32}}>
        {categories.map(cat => (
          <div key={cat.name} style={{background: '#f1f5f9', borderRadius: '1rem', padding: '1rem 2rem', minWidth: 160, textAlign: 'center'}}>
            <div style={{fontWeight: 600, color: '#1e293b'}}>{cat.name}</div>
            <div style={{color: '#64748b'}}>{cat.count}</div>
          </div>
        ))}
      </div>
      <h2 style={{fontSize: '1.3rem', fontWeight: 600, color: '#2563eb', marginBottom: 8}}>Featured Calendars</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32}}>
        {featuredCalendars.map(cal => (
          <div key={cal.name} style={{background: '#f1f5f9', borderRadius: '1rem', padding: '1rem', minWidth: 260, maxWidth: 300, flex: 1}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
              <img src={cal.avatar} alt={cal.name} style={{width: 40, height: 40, borderRadius: '50%'}} />
              <div style={{fontWeight: 600, color: '#1e293b'}}>{cal.name}</div>
            </div>
            <div style={{color: '#475569', fontSize: 15}}>{cal.desc}</div>
            <button style={{marginTop: 10, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer'}}>Subscribe</button>
          </div>
        ))}
      </div>
      <h2 style={{fontSize: '1.3rem', fontWeight: 600, color: '#2563eb', marginBottom: 8}}>Explore Local Events</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
        {localEvents.map(city => (
          <div key={city.city} style={{background: '#f1f5f9', borderRadius: '1rem', padding: '1rem 2rem', minWidth: 160, textAlign: 'center'}}>
            <div style={{fontWeight: 600, color: '#1e293b'}}>{city.city}</div>
            <div style={{color: '#64748b'}}>{city.count} Events</div>
          </div>
        ))}
      </div>
    </div>
  );
} 