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
  inputs: {
    compose: "Text:",
    composePlaceholder: "Add your text here",
    textcolor: "Text",
    strokecolor: "Stroke",
    backgroundcolor: "Background",
    fontsize: "Font Size:",
    strokewidth: "Stroke Width:",
    fontfamily: "Font Family:",
    aspects: "Aspect:",
  },
  EditButton: "Edit",
  DownloadButton: "Download",
  CopyButton: "Copy",
  MailtoButton: "Send",
  UploadButton: "Save",
  DeleteButton: "Delete Item",
  feedbackLabel: "Page:",
  messages: {
    copySuccess: "Image copied to clipboard!",
    copyError: "Failed to copy image.",
    downloadSuccess: "Image downloaded!",
    downloadError: "Failed to download image",
    mailtoBody: `Paste your image here. Ctrl + V (Windows) or Command (⌘) + V (macOS)`,
    loadingShare: "Loading Image",
    loadingSaved: "Loading Images",
    savedNoImages: "You have no saved images",
    savedImageTitle: "Click to share this image",
  },
  nav: {
    create: "Create",
    saved: "Saved",
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
