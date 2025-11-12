function Star({ className = "", size = 128 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256" 
      width={size} 
      height={size} 
      fill="currentColor"
      className={className}
    >
      <path d="M128 0
               C124 80 80 120 0 128
               C80 136 124 176 128 256
               C132 176 176 136 256 128
               C176 120 132 80 128 0Z"/>
    </svg>
  )
}

export default Star

