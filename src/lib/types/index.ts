export interface InputFormProps {
  text: string;
  setText: (value: string) => void;
  foregroundColor: string;
  setForegroundColor: (value: string) => void;
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
  dimensions: { width: number; height: number };
  setDimensions: (value: { width: number; height: number }) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  fontFamily: string;
  setFontFamily: (value: string) => void;
}

export interface PreviewCanvasProps {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  dimensions: { width: number; height: number };
  fontSize: number;
  fontFamily: string;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export interface CreateButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  setBase64Image: (value: string) => void;
}

export const presetDimensions = {
  twitter: { width: 1024, height: 512 },
  facebook: { width: 1200, height: 630 },
  instagram: { width: 1080, height: 1080 },
  linkedin: { width: 1200, height: 627 },
};
