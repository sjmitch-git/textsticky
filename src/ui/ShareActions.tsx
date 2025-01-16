import DownloadButton from "@/ui/DownloadButton";
import EditButton from "@/ui/EditButton";
import CopyButton from "@/ui/CopyButton";
import MailtoButton from "@/ui/MailtoButton";
import XShareButton from "@/ui/XShareButton";
import LinkedInShareButton from "@/ui/LinkedinButton";
import FacebookShareButton from "@/ui/FacebookButton";
import SlackShareButton from '@/ui/SlackButton';
import WhatsAppShareButton from '@/ui/WhatsappButton';

import { ShareActionsProps } from "@/lib/types";

const ShareActions = ({ imageData, subject }: ShareActionsProps) => {
  return (
    <div className="flex flex-col gap-4 sticky bottom-4 items-center">
      <div className="flex md:flex-col md:fixed md:left-4 md:top-1/3 items-center gap-2">
        <XShareButton text={subject} />
        <FacebookShareButton />
        <SlackShareButton text={subject} />
        <WhatsAppShareButton text={subject} />
        <LinkedInShareButton />
      </div>
      <div className="flex gap-4">
        <EditButton />
        <DownloadButton imageData={imageData} />
        <CopyButton imageData={imageData} />
        <MailtoButton imageUrl={imageData} subject={subject} />
      </div>
    </div>
  );
};

export default ShareActions;
