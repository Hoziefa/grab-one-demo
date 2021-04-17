import React from 'react';

export const Backdrop: React.FC<{ isActive: boolean }> = ({ isActive }): null | JSX.Element => isActive ? <div className="backdrop" /> : null;
