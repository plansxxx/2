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
              {/* Base SVG Body */}
              <svg 
                viewBox="0 0 500 910.86" 
                className="w-full h-auto max-h-[600px] object-contain mx-auto"
              >
                {/* Base body outline */}
                <path 
                  d="M498.02,443.67c-.27-2.34-1.34-5.3-2.22-7.08-5.23-10.48-9.65-21.71-13.26-33.7-1.7-5.63-5.23-12.23-7.64-18.1-7.7-18.71-16.44-41.68-26.2-61.03-3.49-6.93-6.52-11.99-9.08-15.18-3.14-3.94-8.76-10.37-16.83-19.32-2.57-2.84-4.19-5.1-4.89-6.76-8.49-20.2-15.13-35.61-27.85-51.32-.34-.41-.58-.89-.72-1.41-4.69-16.94-9.29-30.6-13.79-41-3.79-8.73-10.14-15.89-19.05-21.47-3.54-2.23-9.12-4.01-12.67-4.9-4.89-1.22-10.18-2.51-15.87-3.87-.98-.23-1.89-.69-2.65-1.35-4.1-3.52-6.98-5.69-8.64-6.51-.22-.11-7.75-3.41-22.59-9.93-2.95-1.3-6.61-4.18-10.99-8.63-.28-.28-.43-.65-.46-1.05-.37-6.23-.65-14.11-.86-23.62-.07-3.41.23-6,.92-7.78.95-2.48,1.18-4.84,1.37-6.89.04-.37.34-.66.71-.67,9.64-.36,10.11-14.81,9.69-22.24-.25-4.57-2.19-7.34-5.84-8.31-.39-.1-.63-.48-.55-.87.37-2.28.53-4.16.46-5.63-.37-7.57-.33-14.65.14-21.26.82-11.46-1.86-21.9-12.3-27.47-4.6-2.45-9.12-4.02-13.55-4.72-1.06-.17-2.13.25-3.22,1.26-.39.36-.96.41-1.42.14-9.59-5.78-24.71-2.33-33.78,2.72-1.2.67-1.45,1.52-.72,2.54.02.04.05.08.06.12.14.33-.01.7-.34.83-5.37,2.25-12.34,10.6-14.32,16.48-.93,2.76-1.14,6.89-.65,12.4.9,10.11.89,15.61,2.82,22.88.08.3-.08.63-.39.75-8.31,3.08-5.43,17.96-3.36,24.35,1.23,3.78,3.77,5.78,7.64,5.99.51.02.92.43.94.95.12,2.89.69,5.65,1.7,8.29.35.9.52,1.88.49,2.86l-.63,26.75c-.01.3-.12.58-.33.8-4.46,4.65-8.34,7.71-11.64,9.17-11.82,5.22-18,7.93-18.54,8.13-4.88,1.84-8.94,4.93-12.48,8.24-.69.64-1.53,1.08-2.45,1.29-4.57,1.01-10.24,2.41-17.02,4.19-6.35,1.66-11.49,4-15.43,7.01-7.13,5.46-12.3,11.98-15.49,19.54-4.46,10.52-8.98,23.96-13.55,40.33-.18.61-.47,1.2-.88,1.71-8.35,10.54-15.16,21.96-20.43,34.26-2.31,5.39-4.67,10.91-7.1,16.57-.33.75-.72,1.47-1.22,2.12-1.58,2.13-2.45,3.3-2.59,3.49-5.24,6.72-17.44,18.14-23.55,29.19-12.7,23.01-19.56,42.31-32.09,73.39-.19.47-.42.93-.69,1.36-.76,1.22-1.28,2.19-1.55,2.93-2.41,6.18-5.14,13.97-8.2,23.38-.93,2.84-3.65,9.02-8.18,18.55-.77,1.63-1.45,3.65-1.98,5.45-.18.6-.29,1.22-.35,1.84-.86,8.57-1.4,14.79-1.65,18.7-.35,5.52-.29,9.29.17,11.32,1.06,4.66,2.24,9.28,3.55,13.83.19.66.81,1.11,1.51,1.07,3.65-.19,6.1-2,7.34-5.42.14-.39.45-.71.83-.87.8-.33,1.58-.07,2.43-.58,1.69-1,2.52-2.33,2.51-3.99-.1-9.48-.8-15.59,1.07-20.58.69-1.84,1.31-3.66,1.9-5.47.4-1.22.58-4.06.55-8.53,0-.07.11-.11.11-.11h.58c.19.01.34.18.33.37-.3,6.12-.18,18.03,8.48,18.03,3.7,0,5.58-4.55,5.83-7.78.25-3.1.63-7.92,1.1-14.46.28-3.79,1.24-7.11,2.92-9.95,1.93-3.29,2.96-5.42,3.1-6.39.54-3.84-.18-7.31-2.17-10.41-.42-.66-.47-1.48-.14-2.19,3.08-6.58,7.41-12.26,12.99-17.07,5.99-5.13,13.34-10.61,18.16-15.2,12.52-11.91,22.55-26.06,30.12-42.41,2.14-4.64,4.98-9.57,8.34-14.19,11.67-16.13,19.7-27.13,24.07-33.02,3.22-4.33,6.41-8.02,9.6-11.1,3.63-3.51,5.84-6.47,8.26-10.06.05-.08.13-.13.22-.16.2-.05.4.07.45.27,3.48,12.96,8.02,25.32,13.64,37.07,4.71,9.87,7.36,16,7.94,18.4,1.89,7.84,2.4,15.55,1.54,23.12-2.87,25.08-5.51,52.36-9.3,76.32-.67,4.3-2.71,13.77-6.12,28.42-10.93,47.04-14.37,98.78-6.52,147.01,1.12,6.93,2.96,15.05,5.53,24.38.11.42.18.86.18,1.29.2,7.87-.41,15.02-1.84,21.47-1.43,6.41-1.35,10.42-1.98,16.85-.04.4-.12.8-.23,1.19-3.48,11.84-5.43,17.2-7.39,26.97-4.69,23.37-4.88,47.49-1.43,71.45,2.67,18.56,4.99,40.06,5.41,55.25.25,8.96-2.11,18.01-2.63,26.13-.01.13-.05.27-.11.39l-14.46,25.03c-.04.06-.08.12-.14.17-8.11,7.2-19.91,15.83-20.14,25.66-.06,2.29,1.02,3.89,3.23,4.81.36.16.64.45.78.82.59,1.53,1.48,2.46,2.67,2.79.43.12.8.42,1,.83.98,1.96,2.41,2.98,4.3,3.04.72.02,1.42.28,1.99.72,2.71,2.12,5.16,2.53,7.36,1.23.55-.33,1.26-.3,1.8.06,8.18,5.61,14.61.71,18.97-6.42.18-.29.45-.52.76-.65,7.12-2.89,10.78-7.71,10.96-14.44.13-4.42,4.17-6.13,8.04-8.47,7.32-4.43,6.98-10.37,6.29-18.13-.16-1.89-.48-4.55-.96-8-.08-.59.07-2.61.46-6.07.05-.45.2-.88.46-1.27,1.77-2.75,2.58-5.94,2.4-9.59-.7-14.02-1.19-23.7,1.29-36.14,3-15.1,7.1-30.62,12.29-46.6.28-.87.69-1.69,1.19-2.43,4.12-6.07,6-12.79,5.64-20.17-.76-15.54-3.06-31.66-4.19-45.79-.27-3.31-.02-6.64,1.34-9.4,3.19-6.45,11.02-18.83,13.53-27.76,1.65-5.92,2.77-11.42,3.34-16.5,1.81-16.25,3.16-28.66,6.51-42.59,2.59-10.76,4.34-17.43,5.26-20.03,6.47-18.19,10.61-31.09,12.41-38.72,2.84-12.04,4.11-18.58,3.81-19.63-1.58-5.47-2.1-9.49-1.55-12.06h0c.12-.6.64-1.04,1.24-1.05.71-.01,1.3.55,1.31,1.26.11,2.66.17,5.58.2,8.75.04,3.43.93,9.19,2.67,17.26,2.31,10.6,6.28,22.62,11.28,36.93,6.98,19.97,11.16,40.6,13.36,61.75,1.36,13.02,2.89,24.46,7.93,33.9,5.92,11.07,9.11,17.08,9.59,18.02,1.33,2.57,1.88,5.46,1.66,8.65-.54,7.99-1.53,17.66-2.95,29-.43,3.4-.77,7.18-1.01,11.34-.4,6.66-.75,14.01,1.6,19.91.54,1.37,1.88,3.83,4,7.36.4.66.71,1.37.95,2.11,4.93,15.1,8.9,30.02,11.93,44.8,2.51,12.28,2.69,23.5,1.66,36.03-.37,4.52.49,8.46,2.58,11.84.19.34.33.71.36,1.1.66,6.25-.65,11.96-.93,17.73-.29,6.11.69,9.85,5.28,13.24,3.55,2.61,9.16,4.31,9.4,9.41.35,7.02,4.04,11.65,10.75,14.4.58.23,1.05.66,1.35,1.2,3.92,7.31,11.22,11.01,18.58,5.89.49-.34,1.13-.37,1.66-.08,2.48,1.36,5,.93,7.54-1.3.39-.35.89-.54,1.42-.54,3.95,0,3.75-3.06,6.47-4.36.71-.34,1.41-1.11,2.12-2.33.2-.35.51-.65.86-.86,3.05-1.8,3.88-4.58,2.47-8.35-3.53-9.48-12.9-15.87-19.2-21.85-.3-.3-.57-.63-.78-1l-13.54-23.19c-.45-.77-.73-1.61-.84-2.49-.69-5.6-1.47-11.93-2.34-18.95-.54-4.43-.28-12.07.81-22.91,1.2-12.13,2.99-27.78,5.35-46.95,3.52-28.62.9-56.51-7.83-83.67-2.29-7.08-2.54-11.76-2.94-17.87-.12-1.94-.8-5.45-2.04-10.53-.52-2.16-.87-8.05-1.04-17.69-.01-.46.05-.92.18-1.35,3.33-11.91,5.47-21.75,6.43-29.48,1.69-13.58,2.65-23.01,2.89-28.31,1.69-36.83-1.48-73.55-9.51-110.16-2.4-10.91-5.42-21.84-7.02-32.68-2.4-16.16-3.87-26.84-4.41-32.06-1.88-18.03-3.2-30.02-3.98-35.95-.92-7-1.28-13.31-1.07-18.95.3-8.59,3.22-16.41,7.64-25.38,6.79-13.82,12.06-27.73,15.81-41.77.02-.08.07-.16.14-.19.14-.08.33-.04.41.11,2.3,3.64,4.83,6.82,7.59,9.55,4.87,4.83,8.69,9.24,11.47,13.2.08.13,7.01,9.64,20.81,28.53,5.37,7.37,8.6,13.24,12.73,21.7,7.84,16.04,18.44,29.82,31.78,41.35.34.3,4.79,3.98,13.38,11.02,6.06,4.98,10.64,10.87,13.72,17.66.24.53.3,1.13.18,1.7-.4,1.83-1.98,3.48-2.37,5.88-.61,3.58.25,7.01,2.57,10.6,4.32,6.72,3.93,16.79,4.47,25.03.33,4.98,3.36,9.99,9.19,7.49,5.16-2.2,5.36-12.25,5.19-17.6,0-.05,0-.08.02-.13.07-.13.24-.2.37-.13l.63.27s.04.04.04.06c-.29,5.25.6,10.16,2.67,14.72.27.58.43,1.2.49,1.84.49,5.23.59,10.78.29,16.67-.18,3.61,1.43,5.54,4.82,5.79.4.02.73.29.88.66,1.34,3.67,3.88,5.53,7.6,5.57.66,0,1.23-.45,1.4-1.08l3.79-14.73c.06-.23.1-.47.1-.71.12-6.59-.53-16.11-1.96-28.55Z" 
                  fill="#e5e7eb" 
                  stroke="#9ca3af" 
                  strokeWidth="1"
                />

                {/* Interactive Body Parts - Front View */}
                
                {/* Left Shoulder */}
                <ellipse 
                  cx="180" cy="180" rx="35" ry="25"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Shoulder */}
                <ellipse 
                  cx="320" cy="180" rx="35" ry="25"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Elbow */}
                <circle 
                  cx="120" cy="270" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Elbow */}
                <circle 
                  cx="380" cy="270" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Wrist/Hand */}
                <ellipse 
                  cx="80" cy="360" rx="18" ry="25"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Wrist/Hand */}
                <ellipse 
                  cx="420" cy="360" rx="18" ry="25"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Hip Area */}
                <ellipse 
                  cx="250" cy="400" rx="40" ry="20"
                  style={getBodyPartStyle('hip')}
                  onClick={() => handleBodyPartClick('hip')}
                  onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Knee */}
                <circle 
                  cx="220" cy="580" r="22"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Knee */}
                <circle 
                  cx="280" cy="580" r="22"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Foot/Ankle */}
                <ellipse 
                  cx="210" cy="750" rx="20" ry="30"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Foot/Ankle */}
                <ellipse 
                  cx="290" cy="750" rx="20" ry="30"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Pediatric Indicator */}
                <circle 
                  cx="400" cy="650" r="25"
                  style={getBodyPartStyle('pediatric-orthopedics')}
                  onClick={() => handleBodyPartClick('pediatric-orthopedics')}
                  onMouseEnter={(e) => handleBodyPartHover('pediatric-orthopedics', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Pediatric Icon */}
                <text x="400" y="660" textAnchor="middle" fontSize="20" fill="#92400e" pointerEvents="none">👶</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Back View */}
        <div className="relative">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-700">Back View</h3>
          <div className="relative bg-gray-50 rounded-lg p-4">
            <div className="relative inline-block w-full">
              {/* Base SVG Body - Back */}
              <svg 
                viewBox="0 0 500 911.29" 
                className="w-full h-auto max-h-[600px] object-contain mx-auto"
              >
                {/* Base body outline - back */}
                <path 
                  d="M499.76,455.61c-.89-4.3-2.83-11.11-5.82-20.42-1.78-5.55-2.66-11.47-2.66-17.74.01-5.08-1.36-9.87-4.14-14.36-.23-.37-.42-.78-.55-1.2-5.71-17.66-11.09-33.47-16.11-47.43-3.19-8.84-6.47-16.63-9.83-23.34-7.93-15.81-19.23-29.8-32.35-42.06-.3-.28-.55-.6-.76-.95-2-3.41-3.41-8.18-4.27-10.71-1.96-5.84-4.77-10.49-7.76-16.48-.74-1.49-2.1-4.72-4.07-9.68-4.42-11.15-11.21-20.99-20.37-29.56-.39-.36-.66-.83-.76-1.36-1.33-6.74-2.57-11.72-3.71-14.96-7.6-21.45-22.27-36.07-43.97-43.89-4.69-1.69-9.47-2.49-14.34-2.41-.4,0-.78-.11-1.12-.31-6.06-3.72-9.51-5.75-10.34-6.1-10.64-4.42-18.51-7.78-23.6-10.1-2.81-1.28-6.22-4.06-10.25-8.35-.2-.22-.33-.49-.33-.8l-.75-29.69c-.01-.36.06-.74.2-1.07,1.24-2.98,1.94-6.01,2.12-9.09.04-.53.47-.96,1-.96,9.75-.31,10.25-15.19,9.75-22.89-.18-2.77-1.16-4.92-2.9-6.42-.34-.28-.48-.72-.39-1.16.98-4.35,1.6-7.12,1.9-8.33,3.55-14.45-2.66-28.23-11.21-39.53-.01-.02-.02-.04-.04-.06-.22-.35-.1-.81.25-1.02l.93-.52c.35-.2.48-.64.3-1-5.28-10.82-19.64-11.57-29.46-8.86-.06.02-.13.02-.19.02-.37-.01-.66-.33-.65-.69.01-.61-.07-1.06-.25-1.35-.24-.39-.65-.63-1.1-.67-5.46-.53-13.01,1-18.72,2.93-11.8,4-20.07,11.43-24.83,22.3-2.35,5.35-3.4,11.37-3.14,18.09.25,6.6,1.25,12.68,3.02,18.21.13.41.06.86-.19,1.22l-2.54,3.58c-.19.29-.33.61-.37.95-1.07,7.6-.29,14.43,2.35,20.47,1.31,2.99,3.72,4.52,7.24,4.6.46,0,.83.37.86.83.11,2.88.84,6,2.23,9.36.08.22.12.45.12.67l-.7,29.66c-.01.54-.22,1.06-.58,1.46-3.74,4.04-7.66,6.99-11.8,8.88-3.74,1.71-9.29,4.07-16.65,7.08-5.72,2.34-9.96,4.84-14.78,7.9-.76.48-1.65.75-2.55.75-11.34-.05-22.93,5.39-32.47,12.13-16.51,11.69-25.64,29.36-28.87,49.11-.08.51-.34.96-.7,1.31-9.23,8.59-16.06,18.51-20.51,29.76-1.87,4.71-3.22,7.92-4.05,9.59-2.83,5.7-5.71,10.58-7.65,16.27-.51,1.49-1.33,3.89-2.45,7.21-.73,2.19-2,4.16-3.69,5.74-15.81,14.83-27.99,31.57-36.36,52.02-7.6,18.58-14.46,39.95-20.29,58.03-1.28,3.94-4.14,7.43-4.78,12.1-.57,4.18-.81,8-.73,11.46.01.82-.06,1.65-.23,2.46-1.76,8.62-4.81,17.5-7.55,27-.92,3.19-1.01,6.31-.3,9.39,2.37,10.18,3.74,15.99,4.1,17.4.65,2.53,2.11,4.83,4.39,6.9,2.28,2.08,5.88,5.16,10.82,9.23.31.25.76.24,1.06-.02,1.52-1.33,2.61-3.19,2.84-5.25.12-1,.29-1.7.49-2.07.16-.29.36-.54.61-.77,2.13-1.95,2.93-4.37,2.36-7.25-.51-2.58-3.39-4.95-4.19-7.83-.17-.61-.16-1.27.02-1.87.51-1.71,1.3-6.4,2.39-14.06.18-1.31.99-2.47,2.4-3.49.06-.05.13-.07.22-.07.24-.01.45.17.45.4.2,6.95,3,19.78,13.53,13.1.64-.41,1.01-1.13.96-1.89-.29-5.33-1.1-10.84-2.42-16.57-.31-1.36-.22-3.89.28-7.59.64-4.8.34-8.45-1.23-11.9-.22-.48-1.28-2.16-3.19-5.02-.89-1.34-1.1-3.01-.55-4.52,1.7-4.69,3.92-8.96,6.66-12.81,7.07-9.9,14.16-17.53,22.72-26.46,14.19-14.81,25.47-37.39,33.29-49.17,7.04-10.62,14.18-20.07,21.44-28.4,6.13-7.05,10.46-12.41,13-16.11,6.3-9.15,12-17.75,17.11-25.78.06-.08.14-.14.25-.17.22-.05.42.08.47.3,2.46,10.57,5.75,20.77,9.86,30.6.73,1.75,2.54,5.18,5.43,10.33,7.8,13.9,8.7,32.81,8.31,48.5-.49,20.12-3.27,41.53-7.95,63.14-.47,2.12-.63,4.96-.49,8.53.11,2.9-.43,6.28-1.64,10.13-2.66,8.53-4.72,16.3-6.18,23.3-10.75,51.75-14.31,105.72-3.41,157.4,1.07,5.07,1.55,9.72.88,14.1-1.8,11.87-2.92,22.24-3.36,31.1-.34,6.76-1.6,13.45-3.19,18.45-4.87,15.29-7.68,25.05-8.41,29.28-2.19,12.57-3.19,22.01-3,28.34.18,6.35.64,13.22,1.37,20.6,1.7,17.18,3.59,36.51,5.65,57.98,1.17,12.15,1.77,21.18,1.77,27.12,0,2.78-1.04,9.62-3.12,20.51-.08.48-.28.94-.57,1.34-3.54,4.92-7.68,9.25-12.4,13.01-.52.42-1.14.69-1.8.78-3.53.51-4.13,2.99-7.43,3.48-2.83.42-5.49,2.41-7.98,5.96-3.95,5.65.11,9.75,5.51,11.05,7.28,1.75,13.35,3.36,18.21,4.86.54.17,1.05.47,1.45.88,6.72,6.76,14.95,9.96,24.68,9.6,8.16-.3,13.33-3.94,15.52-10.92.78-2.48.9-6.53.39-12.15-.63-6.83-.78-12.15.02-17.81.71-4.95,1.19-6.89.73-12.71-.47-6.04-.01-12.51,1.4-19.39,4.28-20.87,9.77-41.09,16.48-60.67,1.74-5.04,3.1-8.06,5.31-13.06,1.36-3.07,2.31-6.46,2.84-10.16.96-6.69,1.13-13.8.52-21.35-1.57-19.27-3.17-35.06-4.8-47.4-.63-4.68-.37-10.04,2.31-13.56,4.02-5.29,6.51-8.64,7.43-10.05,5.49-8.35,7.52-18.59,9.11-30.04,2.34-16.84,5.31-32.44,8.94-46.79,4.77-18.87,11.43-40.22,15.27-61.14,2.55-13.92,4.39-29.26,5.51-46.02h-.01s0-.01,0-.01c.02-.07.1-.12.17-.1.08.01.14.12.14.3.83,15.46,2.74,31.23,5.69,47.29,3.7,20.05,9.9,40.06,15.04,59.78,3.34,12.83,6.72,31.18,10.13,55.04.9,6.28,3.06,12.7,6.47,19.27,2.37,4.57,5.94,8.51,9.1,12.83.42.58.75,1.23.98,1.92,1.13,3.49,1.63,5.82,1.49,6.99-2.57,21.93-5.36,42.52-5.63,62.88-.07,5.4,1.11,10.42,1.89,15.64.06.42.18.82.36,1.2,3.19,6.99,5.54,12.69,7.02,17.09,7.27,21.44,12.81,42.21,16.63,62.32,1.29,6.78,1.71,11.87,1.27,15.25-.52,3.96-.64,6.75-.39,8.36,1.22,7.81,1.71,13.36,1.47,16.65-.7,9.68-2.23,16.05,1.47,23.11,3.45,6.57,11.45,8.12,18.77,7.21,8.55-1.06,15.03-4.12,19.41-9.19.39-.45.89-.78,1.46-.96,5.36-1.67,10.98-3.19,16.87-4.57,5.07-1.19,11.29-4.25,7.96-10.25-2.28-4.11-5.27-6.52-8.94-7.25-1.42-.28-2.43-.75-3.02-1.4-1.98-2.17-4.47-1.54-6.89-3.53-4.25-3.49-8.07-7.58-11.43-12.24-.24-.34-.41-.72-.49-1.13-2.1-9.78-3.74-18.95-3.01-29.4,1.61-23.38,4.21-46.71,7.63-80.51,1.77-17.53.64-34.39-3.42-50.57-.67-2.66-1.67-6.22-3-10.65-.02-.08-1.11-3.64-3.27-10.65-2.25-7.34-3.46-12.63-3.61-15.86-.52-10.35-1.75-22.36-3.66-36.04-.57-4.08-.61-7.21-.12-9.39,6.88-30.58,9.08-62.72,6.63-96.39-1.72-23.65-5.01-46.73-9.86-69.22-1.78-8.25-3.95-14.53-6.19-22.47-.87-3.08-1.08-6.66-.64-10.75.04-.4.02-.8-.05-1.18-.37-2.06-1.53-8.02-3.45-17.92-1.65-8.52-3.05-19.21-4.18-32.09-1.59-18.12-1.37-33.09.65-44.89,1.33-7.76,2.74-13.1,4.22-16,1.1-2.17,3.18-6.08,6.24-11.76,4.66-8.6,8.39-21.89,11.63-33.62.02-.11.1-.19.18-.25.2-.13.47-.07.6.13,4.96,7.77,10.58,16.25,16.84,25.44,2.54,3.75,6.72,8.92,12.53,15.51,5.99,6.81,12.49,15.25,19.5,25.34,6.13,8.82,14.43,24.32,22.46,35.83,4.61,6.64,7.53,10.62,8.72,11.93,8.77,9.62,19.28,20.03,27.36,31.65,2.75,3.93,7,10.76,6.84,15.42-.02.55-.2,1.1-.53,1.55-3.96,5.55-5.74,9.43-4.76,16.48.41,2.99.59,5.33.53,7.01v.05l-2.81,16.74c-.19,1.12.28,2.24,1.2,2.89,10.27,7.15,13.39-6.27,13.45-13.1,0-.06.01-.12.05-.18.11-.19.35-.27.54-.16,1.7.96,2.7,2.94,2.87,4.86.4,4.34,1.1,8.53,2.12,12.59.36,1.42.07,2.93-.8,4.11-2.43,3.34-5.76,8.37-1.87,12.12.73.7,1.17,1.16,1.31,1.37.23.36.36.77.4,1.19.18,2.69,1.18,4.82,3,6.41.34.29.84.29,1.19,0,6.1-5.11,9.52-8.04,10.27-8.77,2.58-2.52,4.07-4.55,4.48-6.11,1.06-4.02,2.43-9.75,4.12-17.16.78-3.46.95-6.28.51-8.46Z" 
                  fill="#e5e7eb" 
                  stroke="#9ca3af" 
                  strokeWidth="1"
                />

                {/* Interactive Body Parts - Back View */}
                
                {/* Left Shoulder Blade */}
                <ellipse 
                  cx="180" cy="180" rx="30" ry="35"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Shoulder Blade */}
                <ellipse 
                  cx="320" cy="180" rx="30" ry="35"
                  style={getBodyPartStyle('shoulder')}
                  onClick={() => handleBodyPartClick('shoulder')}
                  onMouseEnter={(e) => handleBodyPartHover('shoulder', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Elbow - Back */}
                <circle 
                  cx="120" cy="270" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Elbow - Back */}
                <circle 
                  cx="380" cy="270" r="20"
                  style={getBodyPartStyle('elbow')}
                  onClick={() => handleBodyPartClick('elbow')}
                  onMouseEnter={(e) => handleBodyPartHover('elbow', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Wrist - Back */}
                <ellipse 
                  cx="80" cy="360" rx="18" ry="25"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Wrist - Back */}
                <ellipse 
                  cx="420" cy="360" rx="18" ry="25"
                  style={getBodyPartStyle('wrist-hand')}
                  onClick={() => handleBodyPartClick('wrist-hand')}
                  onMouseEnter={(e) => handleBodyPartHover('wrist-hand', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Lower Back/Hip Area */}
                <ellipse 
                  cx="250" cy="380" rx="45" ry="25"
                  style={getBodyPartStyle('hip')}
                  onClick={() => handleBodyPartClick('hip')}
                  onMouseEnter={(e) => handleBodyPartHover('hip', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Knee - Back */}
                <circle 
                  cx="220" cy="580" r="22"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Knee - Back */}
                <circle 
                  cx="280" cy="580" r="22"
                  style={getBodyPartStyle('knee')}
                  onClick={() => handleBodyPartClick('knee')}
                  onMouseEnter={(e) => handleBodyPartHover('knee', e)}
                  onMouseLeave={closeTooltip}
                />

                {/* Left Foot/Ankle - Back */}
                <ellipse 
                  cx="210" cy="750" rx="20" ry="30"
                  style={getBodyPartStyle('foot-ankle')}
                  onClick={() => handleBodyPartClick('foot-ankle')}
                  onMouseEnter={(e) => handleBodyPartHover('foot-ankle', e)}
                  onMouseLeave={closeTooltip}
                />
                
                {/* Right Foot/Ankle - Back */}
                <ellipse 
                  cx="290" cy="750" rx="20" ry="30"
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