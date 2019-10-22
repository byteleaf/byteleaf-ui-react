import React from 'react';

export const Padding = (storyFn: any) => <div style={{ padding: '8px' }}>{storyFn()}</div>;

export const GrayBackground = (storyFn: any) => <div style={{ backgroundColor: '#ddd' }}>{storyFn()}</div>;
