import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>
          Elkana Maina
        </div>
        <div style={{ fontSize: 30, color: '#94a3b8' }}>
          Software Engineer & Systems Architect
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: '20px' }}>
          {/* Simple branding dots or icons */}
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#16d196' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#818cf8' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f47057' }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}