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
      fill: isHovered ? baseColor : `${baseColor}40`,
      stroke: baseColor,
      strokeWidth: isHovered ? '3' : '2',
      opacity: isHovered ? 0.8 : 0.6,
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
              {/* Base SVG Body - Using Front.svg */}
              <div className="relative w-full h-auto max-h-[600px] mx-auto">
                <img 
                  src="/img/Front.svg" 
                  alt="Front body view"
                  className="w-full h-auto max-h-[600px] object-contain mx-auto"
                />
                
                {/* Interactive overlay SVG for clickable areas - precisely positioned */}
                <svg 
                  viewBox="0 0 400 800" 
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                >
                  {/* Interactive Body Parts - Front View - Precisely positioned based on your SVG */}
                  
                  {/* Left Shoulder */}
                  <ellipse 
                    cx="150" cy="160" rx="28" ry="22"
                    style={{ ...getBodyPartStyle('shoulder'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('shoulder')}
                    onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Shoulder */}
                  <ellipse 
                    cx="250" cy="160" rx="28" ry="22"
                    style={{ ...getBodyPartStyle('shoulder'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('shoulder')}
                    onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Elbow */}
                  <circle 
                    cx="110" cy="240" r="16"
                    style={{ ...getBodyPartStyle('elbow'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('elbow')}
                    onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Elbow */}
                  <circle 
                    cx="290" cy="240" r="16"
                    style={{ ...getBodyPartStyle('elbow'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('elbow')}
                    onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Wrist/Hand */}
                  <ellipse 
                    cx="85" cy="340" rx="14" ry="18"
                    style={{ ...getBodyPartStyle('wrist-hand'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('wrist-hand')}
                    onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Wrist/Hand */}
                  <ellipse 
                    cx="315" cy="340" rx="14" ry="18"
                    style={{ ...getBodyPartStyle('wrist-hand'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('wrist-hand')}
                    onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Hip Area */}
                  <ellipse 
                    cx="200" cy="350" rx="32" ry="16"
                    style={{ ...getBodyPartStyle('hip'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('hip')}
                    onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Knee */}
                  <circle 
                    cx="180" cy="500" r="18"
                    style={{ ...getBodyPartStyle('knee'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('knee')}
                    onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Knee */}
                  <circle 
                    cx="220" cy="500" r="18"
                    style={{ ...getBodyPartStyle('knee'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('knee')}
                    onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Foot/Ankle */}
                  <ellipse 
                    cx="175" cy="650" rx="16" ry="22"
                    style={{ ...getBodyPartStyle('foot-ankle'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('foot-ankle')}
                    onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Foot/Ankle */}
                  <ellipse 
                    cx="225" cy="650" rx="16" ry="22"
                    style={{ ...getBodyPartStyle('foot-ankle'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('foot-ankle')}
                    onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Pediatric Indicator */}
                  <circle 
                    cx="300" cy="580" r="20"
                    style={{ ...getBodyPartStyle('pediatric-orthopedics'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('pediatric-orthopedics')}
                    onMouseEnter={(e) => handleBodyPartHover('pediatric-orthopedics', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Pediatric Icon */}
                  <text x="300" y="587" textAnchor="middle" fontSize="14" fill="#92400e" pointerEvents="none">👶</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back View */}
        <div className="relative">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">Back View</h3>
          <div className="relative bg-gray-50 rounded-lg p-4">
            <div className="relative inline-block w-full">
              {/* Base SVG Body - Using Back.svg */}
              <div className="relative w-full h-auto max-h-[600px] mx-auto">
                <img 
                  src="/img/Back.svg" 
                  alt="Back body view"
                  className="w-full h-auto max-h-[600px] object-contain mx-auto"
                />
                
                {/* Interactive overlay SVG for clickable areas - precisely positioned */}
                <svg 
                  viewBox="0 0 400 800" 
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                >
                  {/* Interactive Body Parts - Back View - Precisely positioned based on your SVG */}
                  
                  {/* Left Shoulder Blade */}
                  <ellipse 
                    cx="150" cy="160" rx="22" ry="28"
                    style={{ ...getBodyPartStyle('shoulder'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('shoulder')}
                    onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Shoulder Blade */}
                  <ellipse 
                    cx="250" cy="160" rx="22" ry="28"
                    style={{ ...getBodyPartStyle('shoulder'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('shoulder')}
                    onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Elbow - Back */}
                  <circle 
                    cx="110" cy="240" r="16"
                    style={{ ...getBodyPartStyle('elbow'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('elbow')}
                    onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Elbow - Back */}
                  <circle 
                    cx="290" cy="240" r="16"
                    style={{ ...getBodyPartStyle('elbow'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('elbow')}
                    onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Wrist - Back */}
                  <ellipse 
                    cx="85" cy="340" rx="14" ry="18"
                    style={{ ...getBodyPartStyle('wrist-hand'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('wrist-hand')}
                    onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Wrist - Back */}
                  <ellipse 
                    cx="315" cy="340" rx="14" ry="18"
                    style={{ ...getBodyPartStyle('wrist-hand'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('wrist-hand')}
                    onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Lower Back/Hip Area */}
                  <ellipse 
                    cx="200" cy="320" rx="36" ry="20"
                    style={{ ...getBodyPartStyle('hip'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('hip')}
                    onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Knee - Back */}
                  <circle 
                    cx="180" cy="500" r="18"
                    style={{ ...getBodyPartStyle('knee'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('knee')}
                    onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Knee - Back */}
                  <circle 
                    cx="220" cy="500" r="18"
                    style={{ ...getBodyPartStyle('knee'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('knee')}
                    onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                    onMouseLeave={closeTooltip}
                  />

                  {/* Left Foot/Ankle - Back */}
                  <ellipse 
                    cx="175" cy="650" rx="16" ry="22"
                    style={{ ...getBodyPartStyle('foot-ankle'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('foot-ankle')}
                    onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                    onMouseLeave={closeTooltip}
                  />
                  
                  {/* Right Foot/Ankle - Back */}
                  <ellipse 
                    cx="225" cy="650" rx="16" ry="22"
                    style={{ ...getBodyPartStyle('foot-ankle'), pointerEvents: 'auto' }}
                    onClick={() => handleBodyPartClick('foot-ankle')}
                    onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                    onMouseLeave={closeTooltip}
                  />
                </svg>
              </div>
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