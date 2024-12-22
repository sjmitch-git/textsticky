export interface InputFormProps {
  text: string;
  setText: (value: string) => void;
  foregroundColor: string;
  setForegroundColor: (value: string) => void;
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
  dimensions: { width: number; height: number };
  setDimensions: (value: { width: number; height: number }) => void;
}

export interface PreviewCanvasProps {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  dimensions: { width: number; height: number };
}

export interface CreateButtonProps {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  dimensions: { width: number; height: number };
  setBase64Image: (value: string) => void;
}
