"use client";

import { useState } from "react";

type Props = {
  url: string;
  height?: number;
};

export default function EmbedIframe({ url, height = 500 }: Props) {
  const [failed, setFailed] = useState(false);

  if (!url) return null;

  return (
    <div>
      {!failed && (
        <iframe
          src={url}
          width="100%"
          height={height}
          loading="lazy"
          allowFullScreen
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View project content
          </a>
        </p>
      )}
    </div>
  );
}
