import React from 'react'

export default ({ active }) => (
  <svg
    height="36px"
    width="32px"
    fill={active ? 'aqua' : 'black'}
    x="0px"
    y="0px"
    viewBox="-40 0 552 512">
    <path
      style={{ fill: 'none' }}
      d="M477.7,154.35l-72.48,35.72c0.28,44.93.32,90.64,0.34,132l72.15,35.56a10,10,0,0,0,3.07,1,10.06,10.06,0,0,0,.43-3.22v-199a10,10,0,0,0-.43-3.22A10,10,0,0,0,477.7,154.35Z"
    />
    <path
      style={{ fill: 'none' }}
      d="M46.35,385.08H300.09a15.58,15.58,0,0,0,14.59-10.17q-0.05-31.48-.05-63c0-69.51.15-123,.58-173.12a15.74,15.74,0,0,0-15.12-11.91H46.35a15.58,15.58,0,0,0-15.56,15.56v227A15.58,15.58,0,0,0,46.35,385.08Z"
    />
    <path d="M46.35,415.87H300.09A46.37,46.37,0,0,0,345,381l0.49-1.9v-2q-0.05-32.61-.06-65.23c0-70.15.15-123.95,0.59-174.43v-1.35l-0.22-1.33a46.23,46.23,0,0,0-45.71-38.69H46.35A46.41,46.41,0,0,0,0,142.48v227A46.41,46.41,0,0,0,46.35,415.87ZM30.79,142.48a15.58,15.58,0,0,1,15.56-15.56H300.09a15.74,15.74,0,0,1,15.12,11.91c-0.43,50.12-.61,103.61-0.58,173.12q0,31.48.05,63a15.58,15.58,0,0,1-14.59,10.17H46.35a15.58,15.58,0,0,1-15.56-15.56v-227Z" />
    <path d="M497.19,126.94c-9.41-5.86-21.47-5.94-33.09-.22L374.3,171l0.07,9.65c0.36,51.38.38,104.33,0.41,151.05v9.57l89.32,44a39,39,0,0,0,17.16,4.23,29.88,29.88,0,0,0,15.93-4.45c9.41-5.86,14.81-16.64,14.81-29.58v-199C512,143.58,506.6,132.79,497.19,126.94Zm-16,228.54a10.06,10.06,0,0,1-.43,3.22,10,10,0,0,1-3.07-1L405.56,322.1c0-41.39-.06-87.1-0.34-132l72.48-35.72a10,10,0,0,1,3.08-1,10,10,0,0,1,.43,3.22v199Z" />
    {!active && (
      <g transform="translate(-90, 20) scale(1.1)">
        <path d="M74.37,384.34A17.5,17.5,0,0,1,63.5,353.12L426.77,65.44A17.5,17.5,0,0,1,448.5,92.88L85.23,380.56A17.43,17.43,0,0,1,74.37,384.34Z" />
      </g>
    )}
  </svg>
)
