import { MetaData } from "./metadata";

const en_labels = {
  titles: {
    home: "Create",
    share: "Share",
    saved: "Saved Images",
  },
  descriptions: {
    home: MetaData.defaultDescription,
    share:
      "View your generated content, download it, copy it to the clipboard, or share it directly via email.",
    saved: "View your saved images.",
  },
  EditButton: "Edit",
  DownloadButton: "Download",
  CopyButton: "Copy",
  MailtoButton: "Send",
  UploadButton: "Save",
  messages: {
    copySuccess: "Image copied to clipboard!",
    copyError: "Failed to copy image.",
    downloadSuccess: "Image downloaded!",
    downloadError: "Failed to download image",
    mailtoBody: `Paste your image here. Ctrl + V (Windows) or Command (⌘) + V (macOS)`,
  },
};

/* const es_labels = {
  titles: {
    home: "Crear",
    share: "Compartir",
    saved: "Imágenes Guardadas",
  },
};

const fr_labels = {
  titles: {
    home: "Créer",
    share: "Partager",
    saved: "Images Enregistrées",
  },
}; */

export const Labels = en_labels;
