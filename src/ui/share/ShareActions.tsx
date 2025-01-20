import DownloadButton from "@/ui/share/DownloadButton";
import EditButton from "@/ui/share/EditButton";
import CopyButton from "@/ui/share/CopyButton";
import MailtoButton from "@/ui/share/MailtoButton";
import XShareButton from "@/ui/share/XShareButton";
import LinkedInShareButton from "@/ui/share/LinkedinButton";
import FacebookShareButton from "@/ui/share/FacebookButton";
import SlackShareButton from "@/ui/share/SlackButton";
import WhatsAppShareButton from "@/ui/share/WhatsappButton";

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
