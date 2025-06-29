import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface TooltipData {
  title: string;
  description: string;
  bodyPart: string;
}

const InteractiveBodyMap = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleBodyPartClick = (bodyPart: string) => {
    const linkMap: { [key: string]: string } = {
      'shoulder': '/symptoms/shoulder-pain',
      'elbow': '/symptoms/elbow-conditions',
      'wrist-hand': '/symptoms/wrist-hand',
      'hip': '/symptoms/hip-problems',
      'knee': '/symptoms/knee-conditions',
      'foot-ankle': '/symptoms/foot-ankle',
      'pediatric-orthopedics': '/symptoms/pediatric-orthopedics'
    };
    
    navigate(linkMap[bodyPart] || '/symptoms');
  };

  const handleBodyPartHover = (bodyPart: string, event: React.MouseEvent) => {
    const tooltipData: TooltipData = {
      title: t(`symptoms.bodyMap.tooltips.${bodyPart}.title`),
      description: t(`symptoms.bodyMap.tooltips.${bodyPart}.description`),
      bodyPart
    };

    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltipPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }

    setTooltip(tooltipData);
    setHoveredPart(bodyPart);
  };

  const closeTooltip = () => {
    setTooltip(null);
    setHoveredPart(null);
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        closeTooltip();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define body part styles with hover effects
  const getBodyPartStyle = (bodyPart: string) => {
    const baseColors: { [key: string]: string } = {
      'shoulder': '#3b82f6',
      'elbow': '#10b981',
      'wrist-hand': '#f59e0b',
      'hip': '#a855f7',
      'knee': '#ef4444',
      'foot-ankle': '#22c55e',
      'pediatric-orthopedics': '#fbbf24'
    };

    const isHovered = hoveredPart === bodyPart;
    const baseColor = baseColors[bodyPart] || '#6b7280';
    
    return {
      fill: isHovered ? baseColor : `${baseColor}80`,
      stroke: baseColor,
      strokeWidth: isHovered ? '3' : '2',
      opacity: isHovered ? 0.9 : 0.6,
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto" ref={mapRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Front View */}
        <div className="relative">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">Front View</h3>
          <div className="relative bg-gray-50 rounded-lg p-4">
            <div className="relative inline-block w-full">
              {/* Interactive SVG with actual body parts from Front.svg */}
              <svg 
                viewBox="0 0 400 800" 
                className="w-full h-auto max-h-[600px] object-contain mx-auto"
              >
                {/* Base body outline - simplified version */}
                <path 
                  d="M200 50 C180 50 160 70 160 90 L160 120 C160 140 140 160 120 180 L120 220 C120 240 100 260 80 280 L80 320 C80 340 100 360 120 380 L120 420 C120 440 140 460 160 480 L160 520 C160 540 140 560 120 580 L120 620 C120 640 140 660 160 680 L160 720 C160 740 180 760 200 760 C220 760 240 740 240 720 L240 680 C260 660 280 640 280 620 L280 580 C260 560 240 540 240 520 L240 480 C260 460 280 440 280 420 L280 380 C300 360 320 340 320 320 L320 280 C300 260 280 240 280 220 L280 180 C260 160 240 140 240 120 L240 90 C240 70 220 50 200 50 Z" 
                  fill="#f3f4f6" 
                  stroke="#d1d5db" 
                  strokeWidth="2"
                />

                {/* Interactive Body Parts - Front View */}
                
                {/* Left Shoulder */}
                <path 
                  d="M120 120 C100 120 80 140 80 160 C80 180 100 200 120 200 C140 200 160 180 160 160 C160 140 140 120 120 120 Z"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Shoulder */}
                <path 
                  d="M280 120 C260 120 240 140 240 160 C240 180 260 200 280 200 C300 200 320 180 320 160 C320 140 300 120 280 120 Z"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Elbow */}
                <circle 
                  cx="90" cy="240" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Elbow */}
                <circle 
                  cx="310" cy="240" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Wrist/Hand */}
                <path 
                  d="M60 320 C40 320 20 340 20 360 C20 380 40 400 60 400 C80 400 100 380 100 360 C100 340 80 320 60 320 Z"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Wrist/Hand */}
                <path 
                  d="M340 320 C320 320 300 340 300 360 C300 380 320 400 340 400 C360 400 380 380 380 360 C380 340 360 320 340 320 Z"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Hip Area */}
                <path 
                  d="M160 340 C140 340 120 360 120 380 C120 400 140 420 160 420 L240 420 C260 420 280 400 280 380 C280 360 260 340 240 340 Z"
                  style={getBodyPartStyle('hip')}
                  onClick={() => handleBodyPartClick('hip')}
                  onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Knee */}
                <path 
                  d="M160 500 C140 500 120 520 120 540 C120 560 140 580 160 580 C180 580 200 560 200 540 C200 520 180 500 160 500 Z"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Knee */}
                <path 
                  d="M240 500 C220 500 200 520 200 540 C200 560 220 580 240 580 C260 580 280 560 280 540 C280 520 260 500 240 500 Z"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Foot/Ankle */}
                <path 
                  d="M140 680 C120 680 100 700 100 720 C100 740 120 760 140 760 C160 760 180 740 180 720 C180 700 160 680 140 680 Z"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Foot/Ankle */}
                <path 
                  d="M260 680 C240 680 220 700 220 720 C220 740 240 760 260 760 C280 760 300 740 300 720 C300 700 280 680 260 680 Z"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Pediatric Indicator */}
                <circle 
                  cx="340" cy="600" r="25"
                  style={getBodyPartStyle('pediatric-orthopedics')}
                  onClick={() => handleBodyPartClick('pediatric-orthopedics')}
                  onMouseEnter={(e) => handleBodyPartHover('pediatric-orthopedics', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Pediatric Icon */}
                <text x="340" y="608" textAnchor="middle" fontSize="16" fill="#92400e" pointerEvents="none">👶</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Back View */}
        <div className="relative">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">Back View</h3>
          <div className="relative bg-gray-50 rounded-lg p-4">
            <div className="relative inline-block w-full">
              {/* Interactive SVG with actual body parts from Back.svg */}
              <svg 
                viewBox="0 0 400 800" 
                className="w-full h-auto max-h-[600px] object-contain mx-auto"
              >
                {/* Base body outline - simplified version for back */}
                <path 
                  d="M200 50 C180 50 160 70 160 90 L160 120 C160 140 140 160 120 180 L120 220 C120 240 100 260 80 280 L80 320 C80 340 100 360 120 380 L120 420 C120 440 140 460 160 480 L160 520 C160 540 140 560 120 580 L120 620 C120 640 140 660 160 680 L160 720 C160 740 180 760 200 760 C220 760 240 740 240 720 L240 680 C260 660 280 640 280 620 L280 580 C260 560 240 540 240 520 L240 480 C260 460 280 440 280 420 L280 380 C300 360 320 340 320 320 L320 280 C300 260 280 240 280 220 L280 180 C260 160 240 140 240 120 L240 90 C240 70 220 50 200 50 Z" 
                  fill="#f3f4f6" 
                  stroke="#d1d5db" 
                  strokeWidth="2"
                />

                {/* Interactive Body Parts - Back View */}
                
                {/* Left Shoulder Blade */}
                <path 
                  d="M120 120 C100 120 80 140 80 160 C80 180 100 200 120 200 C140 200 160 180 160 160 C160 140 140 120 120 120 Z"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Shoulder Blade */}
                <path 
                  d="M280 120 C260 120 240 140 240 160 C240 180 260 200 280 200 C300 200 320 180 320 160 C320 140 300 120 280 120 Z"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Elbow - Back */}
                <circle 
                  cx="90" cy="240" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Elbow - Back */}
                <circle 
                  cx="310" cy="240" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Wrist - Back */}
                <path 
                  d="M60 320 C40 320 20 340 20 360 C20 380 40 400 60 400 C80 400 100 380 100 360 C100 340 80 320 60 320 Z"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Wrist - Back */}
                <path 
                  d="M340 320 C320 320 300 340 300 360 C300 380 320 400 340 400 C360 400 380 380 380 360 C380 340 360 320 340 320 Z"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Lower Back/Hip Area */}
                <path 
                  d="M160 320 C140 320 120 340 120 360 C120 380 140 400 160 400 L240 400 C260 400 280 380 280 360 C280 340 260 320 240 320 Z"
                  style={getBodyPartStyle('hip')}
                  onClick={() => handleBodyPartClick('hip')}
                  onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Knee - Back */}
                <path 
                  d="M160 500 C140 500 120 520 120 540 C120 560 140 580 160 580 C180 580 200 560 200 540 C200 520 180 500 160 500 Z"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Knee - Back */}
                <path 
                  d="M240 500 C220 500 200 520 200 540 C200 560 220 580 240 580 C260 580 280 560 280 540 C280 520 260 500 240 500 Z"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Foot/Ankle - Back */}
                <path 
                  d="M140 680 C120 680 100 700 100 720 C100 740 120 760 140 760 C160 760 180 740 180 720 C180 700 160 680 140 680 Z"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Foot/Ankle - Back */}
                <path 
                  d="M260 680 C240 680 220 700 220 720 C220 740 240 760 260 760 C280 760 300 740 300 720 C300 700 280 680 260 680 Z"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div 
          className="absolute z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs border border-gray-200 pointer-events-none"
          style={{
            left: `${Math.min(tooltipPosition.x, 300)}px`,
            top: `${Math.max(tooltipPosition.y - 80, 10)}px`,
            transform: tooltipPosition.x > 300 ? 'translateX(-100%)' : 'none'
          }}
        >
          <h3 className="font-semibold text-gray-900 mb-2">{tooltip.title}</h3>
          <p className="text-sm text-gray-600">{tooltip.description}</p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-blue-200 border border-blue-400 mr-2"></div>
          <span>Shoulder</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-emerald-200 border border-emerald-400 mr-2"></div>
          <span>Elbow</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-amber-200 border border-amber-400 mr-2"></div>
          <span>Wrist/Hand</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-purple-200 border border-purple-400 mr-2"></div>
          <span>Hip</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-red-200 border border-red-400 mr-2"></div>
          <span>Knee</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-green-200 border border-green-400 mr-2"></div>
          <span>Foot/Ankle</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-yellow-200 border border-yellow-400 mr-2"></div>
          <span>Pediatric</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBodyMap;