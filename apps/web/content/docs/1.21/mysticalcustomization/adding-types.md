---
id: adding-types
title: Adding Crop Types
category: Mystical Customization
---

Mystical Customization allows you easily add your own crop types.

## Adding A Crop Type

Crop types are added via JSON files placed in `/config/mysticalcustomization/types/`. Each file represents a new crop type to be added.

::alert{title="Important" icon="i-heroicons-information-circle-solid"}
The name of the file is used as the crop type's ID. The ID **must** be all lowercase with underscores '_' in place of spaces. 
::

## The Crop Type File

This section will go over the values available to use in crop type file. Syntax can be inferred from the example JSON below.

### Textures
::badge{label="Required"}
::

You must assign a stem texture for this crop type. This location is used for every crop growth stage (0-7), which are differentiated by an `_#` suffix.
```json
{
  "textures": {
    "stem": "mysticalagriculture:block/mystical_resource_crop"
  }
}
```

#### Built In Crop Stem Textures
- `mysticalagriculture:block/mystical_resource_crop`
- `mysticalagriculture:block/mystical_mob_crop`

### Crafting Seed
::badge{label="Required"}
::

You must set an item to use as the crafting seed for all crops of this type.
```json
{
  "craftingSeed": "mysticalagriculture:soulium_seed_base"
}
```

## Example File

```json
{
  "textures": {
    "stem": "mysticalagriculture:block/mystical_mob_crop"
  },
  "craftingSeed": "mysticalagriculture:prosperity_seed_base"
}
```
