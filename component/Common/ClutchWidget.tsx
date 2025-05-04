'use client';

import { useState, useEffect } from 'react';

const ClutchWidget = () => {
  const [iframeHeight, setIframeHeight] = useState('400px');
  const iframeSrc = `https://widget.clutch.co/widgets/get/4?ref_domain=yourdomain.com&uid=122766&reviews=370785,370566,370488,370459,369723`;

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.clutchWidgetHeight) {
        setIframeHeight(`${event.data.clutchWidgetHeight}px`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className='container' style={{ width: '100%', minHeight: '400px', position: 'relative' }}>
      <iframe
        src={iframeSrc}
        title="Clutch Reviews"
        width="100%"
        height={iframeHeight}
        style={{ border: 'none' }}
        scrolling="no"
        loading="lazy"
        className='w-full mx-auto h-[500px] lg:h-[700px]'
      />
    </div>
  );
};

export default ClutchWidget;