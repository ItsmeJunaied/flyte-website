'use client'
import React, { useEffect } from 'react';

const ScheduleConsultation: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='lg:mt-20'>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/saiful-flytesolutions/consultancy?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
        </div>
    );
};

export default ScheduleConsultation;

// <!-- Calendly badge widget begin -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/junaied-hossain-flytesolutions', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
// <!-- Calendly badge widget end --></link>