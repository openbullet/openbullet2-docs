import React from 'react';

export default function DownloadButton({children, version, fileName}) {
  // https://github.com/dotnet/installer/issues/11040
  const link = `https://aka.ms/dotnet/${version}/${fileName}`;
  return (
    <a class="download-link" href={link} target="_blank">
      <div class="download-button dotnet-download-button">
        <img class="pre-download-icon" src="/img/dotnet-logo-text_White.png" alt="Download Icon" />
        <span>{children}</span>
        <img class="post-download-icon" src="/img/download_icon.png" alt="Download Icon" />
      </div>
    </a>
  );
}
