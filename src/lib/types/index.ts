export interface Dimensions {
  width: number;
  height: number;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const Aspects: Record<string, Dimensions> = {
  landscape: { width: 1024, height: 512 },
  square: { width: 1080, height: 1080 },
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
  strokeWidth: number;
  strokeColor: string;
}

export interface FormContextProps extends FormState {
  setText: SetState<string>;
  setForegroundColor: SetState<string>;
  setBackgroundColor: SetState<string>;
  setDimensions: SetState<Dimensions>;
  setFontSize: SetState<number>;
  setFontFamily: SetState<string>;
  setAspect: SetState<string>;
  setStrokeWidth: SetState<number>;
  setStrokeColor: SetState<string>;
}

export interface PreviewCanvasProps extends Omit<FormState, "aspect"> {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export interface UploadButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  formState: FormState;
}

export interface DownloadButtonProps {
  imageData: string;
}

export interface CopyButtonProps {
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

export interface DeleteButtonProps {
  id: string;
  onClick: (id: string) => void;
}

export interface SelectAspectProps {
  aspect: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectFontFamilyProps {
  font: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ColorInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MailImageButtonProps {
  imageUrl: string;
  subject: string;
}
