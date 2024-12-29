export interface Dimensions {
  width: number;
  height: number;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const Aspects: Record<string, Dimensions> = {
  square: { width: 1080, height: 1080 },
  landscape: { width: 1024, height: 512 },
  banner: { width: 1920, height: 480 },
};

export interface FormState {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  dimensions: Dimensions;
  fontSize: number;
  fontFamily: string;
  aspect: string;
}

export interface FormContextProps extends FormState {
  setText: SetState<string>;
  setForegroundColor: SetState<string>;
  setBackgroundColor: SetState<string>;
  setDimensions: SetState<Dimensions>;
  setFontSize: SetState<number>;
  setFontFamily: SetState<string>;
  setAspect: SetState<string>;
}

export interface InputFormProps extends Partial<FormContextProps> {}

export interface PreviewCanvasProps extends Omit<FormState, "aspect"> {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export interface UploadButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export interface DownloadButtonProps {
  imageData: string;
}

export interface SaveButtonProps {
  imageData: string;
  blobId: string | null;
}

export interface SavedImageProps {
  url: string;
  blobId: string;
  created: string;
  state: FormState;
}
