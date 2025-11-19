import React from 'react';

export enum DemoType {
  IMAGE_GEN = 'IMAGE_GEN',
  IMAGE_EDIT = 'IMAGE_EDIT',
  VIDEO_GEN = 'VIDEO_GEN'
}

export interface GeneratedMedia {
  url: string;
  prompt: string;
  type: 'image' | 'video';
  timestamp: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}