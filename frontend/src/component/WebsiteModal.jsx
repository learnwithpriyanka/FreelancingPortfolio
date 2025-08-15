import React from 'react';
import './WebsiteModal.css';

export default function WebsiteModal({ url, open, onClose }) {
  if (!open) return null;

  return (
    <div className="website-modal-overlay" onClick={onClose}>
      <div className="website-modal-content" onClick={e => e.stopPropagation()}>
        <div className="website-modal-header">
          <h3 className="website-modal-title">Website Preview</h3>
          <button className="website-modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="website-modal-body">
          <div className="website-modal-iframe-wrapper">
            <iframe 
              src={url} 
              title="Website Preview" 
              frameBorder="0" 
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}