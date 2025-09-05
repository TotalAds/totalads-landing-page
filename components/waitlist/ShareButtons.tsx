"use client";

import { useMemo } from 'react';

export default function ShareButtons() {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://leadsnipper.com";
  const text = encodeURIComponent(
    "Check out LeadSnipper - now live in beta! Turn any website into a complete company profile in seconds. Try it free!"
  );
  const shareUrl = encodeURIComponent(url);

  const links = useMemo(
    () => ({
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${text}%20${shareUrl}`,
    }),
    [text, shareUrl]
  );

  return (
    <div className="flex items-center gap-3 text-sm">
      <a
        className="text-gray-400 hover:text-white underline decoration-white/20"
        href={links.twitter}
        target="_blank"
        rel="noreferrer noopener"
      >
        Share on X
      </a>
      <span className="h-3 w-px bg-white/20" />
      <a
        className="text-gray-400 hover:text-white underline decoration-white/20"
        href={links.linkedin}
        target="_blank"
        rel="noreferrer noopener"
      >
        Share on LinkedIn
      </a>
      <span className="h-3 w-px bg-white/20" />
      <a
        className="text-gray-400 hover:text-white underline decoration-white/20"
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
      >
        WhatsApp a friend
      </a>
    </div>
  );
}
