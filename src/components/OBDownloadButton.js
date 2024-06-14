import React from 'react';

export default function OBDownloadButton({children, fileName}) {
  const link = `https://github.com/openbullet/openbullet2/releases/latest/download/${fileName}`;
  return (
    <a class="download-link" href={link} target="_blank">
      <div class="download-button ob2-download-button">
        <img class="pre-download-icon" src="/img/logo_square_hq.png" alt="Download Icon" />
        <span>{children}</span>
        <img class="post-download-icon" src="/img/download_icon.png" alt="Download Icon" />
      </div>
    </a>
  );
}
