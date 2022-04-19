import { lazy } from 'react';

export const createAsyncPages = componentName => {
  return lazy(() => {
    return import(`../Pages/${componentName}/${componentName}`)
  });
};