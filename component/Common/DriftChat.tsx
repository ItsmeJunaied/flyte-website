/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import React from 'react';

declare global {
  interface Window {
    drift: any;
    driftt: any;
  }
}

export default function DriftChat(): React.ReactElement | null {
  useEffect(() => {
    // Create a function to initialize Drift
    function initializeDrift(): void {
      const t = window.driftt = window.drift = window.driftt || [];
      
      if (t.init) {
        return;
      }
      
      if (t.invoked) {
        if (window.console && console.error) {
          console.error("Drift snippet included twice.");
        }
        return;
      }
      
      t.invoked = true;
      t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ];
      
      t.factory = function(methodName: string): (...args: unknown[]) => unknown {
        return function(...args: unknown[]): unknown {
          const newArgs = [...args];
          newArgs.unshift(methodName);
          t.push(newArgs);
          return t;
        };
      };
      
      t.methods.forEach(function(method: string): void {
        t[method] = t.factory(method);
      });
      
      t.load = function(driftId: string): void {
        const milliseconds = 300000;
        const timestamp = Math.ceil(new Date().getTime() / milliseconds) * milliseconds;
        const script = document.createElement("script");
        
        script.type = "text/javascript";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src = `https://js.driftt.com/include/${timestamp}/${driftId}.js`;
        
        const firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        } else {
          document.head.appendChild(script);
        }
      };
    }
    
    // Execute the initialization
    initializeDrift();
    
    // Initialize Drift with your specific ID
    window.drift.SNIPPET_VERSION = '0.3.1';
    window.drift.load('i9ayibd8bhih');
    
    // Cleanup function (if needed)
    return () => {
      // Optional: Add any cleanup code here
    };
  }, []);

  return null; // This component doesn't render anything
}