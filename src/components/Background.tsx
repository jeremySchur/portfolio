import { useEffect, useRef } from 'react';

interface BackgroundProps {
  home: boolean;
  children: React.ReactNode;
}

interface Dot {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
}


export default function Background(_: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = container.scrollHeight;
    };

    function hexToRgb(hex: string): { r: number; g: number; b: number } {
      const bigint = parseInt(hex.substring(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }
  
  function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
  
  interface RGB {
    r: number;
    g: number;
    b: number;
  }

  function blendColors(color1: string, color2: string): string {
    const rgb1: RGB = hexToRgb(color1);
    const rgb2: RGB = hexToRgb(color2);
    
    const blendFactor: number = Math.random(); // Random number between 0 and 1
    
    const r: number = Math.round(rgb1.r * (1 - blendFactor) + rgb2.r * blendFactor);
    const g: number = Math.round(rgb1.g * (1 - blendFactor) + rgb2.g * blendFactor);
    const b: number = Math.round(rgb1.b * (1 - blendFactor) + rgb2.b * blendFactor);
    
    return rgbToHex(r, g, b);
  }

    const generateDots = () => {
      dotsRef.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        color: blendColors('#51a2e9', '#ff4d5a'),
      }));
    };

    const drawDots = () => {
      if (!context || !canvas) return;
      context.fillStyle = '#1a1a1a';
      context.fillRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach(dot => {
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = dot.color;
        context.fill();

        // Update dot position
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });
    };

    const draw = () => {
      drawDots();
      requestAnimationFrame(draw);
    };

    resizeCanvas();
    generateDots();
    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <canvas ref={canvasRef} className="absolute w-full h-full" style={{ zIndex: -1 }} />
      {_.children}
    </div>
  );
}