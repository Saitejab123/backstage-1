## API Report File for "@backstage/backend-plugin-api"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@backstage/backend-plugin-api';
import { ServiceRef } from '@backstage/backend-plugin-api';

// @alpha (undocumented)
export type BackendFeatureMeta =
  | {
      type: 'plugin';
      pluginId: string;
    }
  | {
      type: 'module';
      pluginId: string;
      moduleId: string;
    };

// @alpha (undocumented)
export interface FeatureDiscoveryService {
  // (undocumented)
  getBackendFeatures(): Promise<{
    features: Array<BackendFeature>;
  }>;
}

// @alpha @deprecated
export const featureDiscoveryServiceRef: ServiceRef<
  FeatureDiscoveryService,
  'root',
  'singleton'
>;

// @alpha (undocumented)
export interface InstanceMetadataService {
  // (undocumented)
  getInstalledFeatures: () => BackendFeatureMeta[];
}

// @alpha
export const instanceMetadataServiceRef: ServiceRef<
  InstanceMetadataService,
  'plugin',
  'singleton'
>;

// (No @packageDocumentation comment for this package)
```
