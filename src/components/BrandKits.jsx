import React, { useState } from 'react';

const brands = [
  {
    name: 'ECorp',
    color: '#1CC29F',
    secondary: '#fff',
    checked: false,
  },
  {
    name: 'ICorp',
    color: '#FFB32C',
    secondary: '#fff',
    checked: false,
  },
  {
    name: 'The Agency',
    color: '#F24B4B',
    secondary: '#7B61FF',
    checked: true,
  },
];

const BrandKits = () => {
  const [selected, setSelected] = useState(2);

  return (
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      background: 'linear-gradient(135deg, #23232b 90%, #7B61FF 100%)',
      borderRadius: 18,
      boxShadow: '0 2px 16px 0 #0004',
      padding: '2rem',
      color: '#fff',
      border: '1.5px solid #444',
    }}>
      <h2 style={{marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.3rem'}}>Brand Kits</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
        {brands.map((brand, idx) => (
          <div key={brand.name} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: selected === idx ? '#23232b' : '#18181f',
            borderRadius: 12, padding: '1rem 1.2rem',
            border: selected === idx ? `2px solid ${brand.secondary}` : '2px solid #23232b',
            boxShadow: selected === idx ? '0 0 0 2px #7B61FF44' : 'none',
            transition: 'all 0.2s',
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              {/* Custom Checkbox */}
              <div
                onClick={() => setSelected(idx)}
                style={{
                  width: 24, height: 24, borderRadius: 6,
                  border: selected === idx ? `2.5px solid ${brand.secondary}` : '2.5px solid #444',
                  background: selected === idx ? brand.secondary : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  marginRight: 8,
                  transition: 'all 0.2s',
                }}
              >
                {selected === idx ? (
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <rect width="16" height="16" rx="4" fill={brand.secondary} />
                    <circle cx="8" cy="8" r="5" fill={brand.color} />
                  </svg>
                ) : null}
              </div>
              {/* Brand Icon (3 dots) */}
              <span style={{display: 'flex', alignItems: 'center', gap: 4}}>
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                  <circle cx="6" cy="9" r="6" fill={brand.color} />
                  <circle cx="14" cy="9" r="6" fill="#fff" />
                  <circle cx="22" cy="9" r="6" fill={brand.secondary} />
                </svg>
              </span>
              <span style={{fontWeight: 500, fontSize: '1.1rem'}}>{brand.name}</span>
            </div>
            {/* Settings Icon */}
            <span style={{cursor: 'pointer'}}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="7" x2="18" y2="7" />
                  <circle cx="7" cy="7" r="2" fill="#23232b" />
                  <line x1="4" y1="15" x2="18" y2="15" />
                  <circle cx="15" cy="15" r="2" fill="#23232b" />
                </g>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandKits; 