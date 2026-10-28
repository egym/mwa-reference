import type { ComponentType } from 'react';

export type RouteConfig = {
  path: string;
  component: ComponentType<any>;
  componentProps?: any;
};
