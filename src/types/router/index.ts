import type { ComponentType } from 'react';

export type RouteConfig = {
  path: string;
  exact?: boolean;
  component: ComponentType<any>;
  componentProps?: any;
};
