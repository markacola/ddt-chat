import React from 'react'

export default ({ active }) => (
  <svg
    height="32px"
    width="32px"
    fill={active ? 'aqua' : 'black'}
    x="0px"
    y="0px"
    viewBox="0 0 512 512">
    <path
      class="cls-1"
      style={{ fill: 'none' }}
      d="M256,33.13a66.34,66.34,0,0,0-66.26,66.26V245.17a66.26,66.26,0,0,0,132.52,0V99.39A66.34,66.34,0,0,0,256,33.13Z"
    />
    <path d="M256,0a99.39,99.39,0,0,0-99.39,99.39V245.17a99.39,99.39,0,0,0,198.78,0V99.39A99.39,99.39,0,0,0,256,0Zm66.26,245.17a66.26,66.26,0,0,1-132.52,0V99.39a66.26,66.26,0,0,1,132.52,0V245.17Z" />
    <path d="M239.43,410v68.86H173.17a16.57,16.57,0,0,0,0,33.13H338.83a16.57,16.57,0,0,0,0-33.13H272.57V410c86.19-8.36,153.78-81.2,153.78-169.54a16.57,16.57,0,1,0-33.13,0c0,75.66-61.56,137.22-137.22,137.22S118.78,316.13,118.78,240.47a16.57,16.57,0,1,0-33.13,0C85.65,328.81,153.25,401.65,239.43,410Z" />
    {!active && (
      <path d="M74.37,384.34A17.5,17.5,0,0,1,63.5,353.12L426.77,65.44A17.5,17.5,0,0,1,448.5,92.88L85.23,380.56A17.43,17.43,0,0,1,74.37,384.34Z" />
    )}
  </svg>
)