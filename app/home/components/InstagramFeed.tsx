"use client";

import Script from "next/script";
import { useState } from "react";

export default function InstagramFeed() {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && (
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 rounded bg-white text-black"
        >
          View Instagram Feed
        </button>
      )}

      {show && (
        <>
          <div className="elfsight-app-b519406a-d828-4114-87e3-a92bfa1b6e4b" />

          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
