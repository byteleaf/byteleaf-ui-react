import React from 'react';

export const Padding = storyFn => <div style={{ padding: '8px' }}>{storyFn()}</div>;

export const GrayBackground = storyFn => <div style={{ backgroundColor: '#ddd' }}>{storyFn()}</div>;
