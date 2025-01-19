export interface Dimensions {
  width: number;
  height: number;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const Aspects: Record<string, Dimensions> = {
  square: { width: 1080, height: 1080 },
  landscape: { width: 1200, height: 630 },
  banner: { width: 1500, height: 500 },
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
  align: CanvasTextAlign;
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
  setAlign: SetState<CanvasTextAlign>;
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

export interface ShareActionsProps {
  imageData: string;
  subject: string;
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
