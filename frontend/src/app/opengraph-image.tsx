import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#28303B',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 24,
          }}
        >
          Stanley Armstrong
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#2dd4bf',
            marginBottom: 32,
          }}
        >
          Fractional Full-Stack Development &amp; Automation Partner
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#9ca3af',
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          I help operations-heavy businesses and lean startup teams ship full-stack products and build automation that saves thousands of hours a year.
        </div>
      </div>
    ),
    { ...size }
  )
}
