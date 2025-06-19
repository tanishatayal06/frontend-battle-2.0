import React, { useState } from 'react';

const FILTERS = [
  { label: 'Refurbishment', type: 'type' },
  { label: 'New build', type: 'type' },
  { label: 'All', type: 'type' },
];
const STATUS = [
  { label: 'Complete', type: 'status' },
  { label: 'Estimate', type: 'status' },
];

const Analytics = () => {
  const [activeType, setActiveType] = useState('All');
  const [activeStatus, setActiveStatus] = useState('Complete');

  return (
    <section style={{background: '#f8f5f4', padding: '2.5rem 0', minHeight: 500}}>
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        {/* Left: Filters and Chart */}
        <div style={{flex: 1, minWidth: 400, marginRight: 40}}>
          <div style={{marginBottom: 24}}>
            <div style={{fontSize: 18, fontWeight: 500, marginBottom: 8}}>Filter by</div>
            <div style={{display: 'flex', gap: 12, marginBottom: 12}}>
              {FILTERS.map(f => (
                <button
                  key={f.label}
                  onClick={() => setActiveType(f.label)}
                  style={{
                    padding: '8px 22px',
                    borderRadius: 24,
                    border: 'none',
                    background: activeType === f.label ? '#7B5151' : '#fff',
                    color: activeType === f.label ? '#fff' : '#7B5151',
                    fontWeight: 500,
                    fontSize: 16,
                    cursor: 'pointer',
                    boxShadow: activeType === f.label ? '0 2px 8px #7B515122' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div style={{display: 'flex', gap: 12}}>
              {STATUS.map(s => (
                <button
                  key={s.label}
                  onClick={() => setActiveStatus(s.label)}
                  style={{
                    padding: '8px 22px',
                    borderRadius: 24,
                    border: 'none',
                    background: activeStatus === s.label ? '#7B5151' : '#fff',
                    color: activeStatus === s.label ? '#fff' : '#7B5151',
                    fontWeight: 500,
                    fontSize: 16,
                    cursor: 'pointer',
                    boxShadow: activeStatus === s.label ? '0 2px 8px #7B515122' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          {/* Key/Legend */}
          <div style={{margin: '18px 0 10px 0', fontSize: 15}}>
            <div style={{marginBottom: 4}}>
              <span style={{borderBottom: '2px dashed #aaa', marginRight: 8, paddingBottom: 2}}>500 kgCO₂e/m²</span>
              - Embodied Carbon Target 2030
            </div>
            <div>
              <span style={{borderBottom: '2px solid #7B5151', marginRight: 8, paddingBottom: 2}}>600 kgCO₂e/m²</span>
              - Embodied Carbon Target 2025
            </div>
          </div>
          {/* Bar Chart Placeholder */}
          <div style={{background: '#fff', borderRadius: 16, minHeight: 260, marginTop: 18, boxShadow: '0 2px 12px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 22}}>
            [Bar Chart Placeholder]
          </div>
        </div>
        {/* Right: Heading and Download */}
        <div style={{minWidth: 340, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: 10}}>
          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: 38, fontWeight: 400, letterSpacing: 1, color: '#222', lineHeight: 1.1}}>EMBODIED<br /><span style={{color: '#7B5151', fontWeight: 500}}>CARBON<br />EMISSIONS</span></div>
            <div style={{margin: '18px 0 24px 0', color: '#7B5151', fontSize: 16, fontWeight: 400}}>Intensity measured by kgCO₂e/m²</div>
            <button style={{border: '1.5px solid #7B5151', borderRadius: '50%', width: 44, height: 44, background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto'}}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#7B5151" strokeWidth="1.5"/><path d="M11 6v7m0 0l-3-3m3 3l3-3" stroke="#7B5151" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <div style={{fontSize: 13, color: '#7B5151', marginTop: 6}}>Download the data</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics; 