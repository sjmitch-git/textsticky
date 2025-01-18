"use client";

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Button } from "@/lib/fluid";
import { FaEnvelope } from "react-icons/fa";
import { MailImageButtonProps } from "@/lib/types";
import { Labels } from "@/lib/constants";

const MailtoButton = ({ imageUrl, subject }: MailImageButtonProps) => {
  const [mailSubject, setSubject] = useState("");
  const t = useTranslations();

  useEffect(() => {
    setSubject(subject);
  }, [subject]);

  const handleMailClick = async () => {
    const encodedSubject = encodeURIComponent(mailSubject.replace(/(\r\n|\n|\r)/g, " "));
    const response = await fetch(imageUrl, { mode: "cors" });
    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);

    const htmlBody = encodeURIComponent(t('messages.mailtoBody'));
    const mailtoLink = `mailto:?subject=${encodedSubject}&body=${htmlBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
      <Button
        onClick={handleMailClick}
        btnBackground="dark"
        btnColor="light"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="lg"
        title={t('buttons.MailtoButton')}
        className="focus:border-info focus-visible:outline-info"
      >
        <FaEnvelope />
        <span className="hidden md:inline-block">{t('buttons.MailtoButton')}</span>
      </Button>
  );
};

export default MailtoButton;
