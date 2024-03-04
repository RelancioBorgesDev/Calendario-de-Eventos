import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

interface ScheduledPostProps {
  post_title: string;
}

export default function ScheduledPost({post_title}: ScheduledPostProps) {
  return (
    <div className="border-2 border-white rounded-lg flex justify-between px-2 py-2 ">
      <h1 className="text-white">{post_title}</h1>
      <div className="flex ">
        <FacebookLogo className="text-white" size={24} />
        <InstagramLogo className="text-white" size={24} />
        <WhatsappLogo className="text-white" size={24} />
      </div>
    </div>
  );
}
