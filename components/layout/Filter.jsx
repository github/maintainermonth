const Filter = () => {
  return (
    <svg id="noise-filter-wrapper">
      <filter id="noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
  )
}

export default Filter
