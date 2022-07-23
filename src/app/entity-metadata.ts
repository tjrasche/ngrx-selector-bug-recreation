import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
export const FOO = 'foo';
const entityMetadata: EntityMetadataMap = {
  [FOO]: {}
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
