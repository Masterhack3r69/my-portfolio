export default function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Background */}
      <rect x="0" y="0" width="50" height="100" fill="#E5E5E5" />
      {/* Right Background */}
      <rect x="50" y="0" width="50" height="100" fill="black" />
      
      {/* J - Centered in left half (25, 50) */}
      <text 
        x="25" 
        y="72" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontWeight="400" 
        fontSize="55" 
        fill="black"
      >
        J
      </text>
      
      {/* D - Centered in right half (75, 50) */}
      <text 
        x="75" 
        y="72" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontWeight="400" 
        fontSize="55" 
        fill="white"
      >
        D
      </text>
    </svg>
  );
}
