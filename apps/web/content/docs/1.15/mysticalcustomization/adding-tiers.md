---
id: adding-tiers
title: Adding Crop Tiers
category: Mystical Customization
---

Mystical Customization allows you easily add your own crop tiers.

## Adding A Crop Tier

Crop tiers are added via JSON files placed in `/config/mysticalcustomization/tiers/`. Each file represents a new crop tier to be added.

::alert{title="Important" icon="i-heroicons-information-circle-solid"}
The name of the file is used as the crop tier's ID. The ID **must** be all lowercase with underscores '_' in place of spaces. 
::

## The Crop Tier File

This section will go over the values available to use in crop tier file. Syntax can be inferred from the example JSON below.

### Name

You can manually define the display name for this crop tier.
```json
{
  "name": "Test"
}
```

Omitting this field will auto generate a translation key with the format `cropTier.mysticalcustomization.{id}`.

### Value
::badge{label="Required"}
::

You must assign an integer tier value to this tier. This is used internally to sort tiers. Higher value = higher tier. For example `mysticalagriculture:elemental` has a tier value of 1.
```json
{
  "value": 7
}
```

### Essence
::badge{label="Required"}
::

You must set an essence item to be used in the crafting recipes of this tier's seeds.
```json
{
  "essence": "mysticalagriculture:tertium_essence"
}
```

### Farmland

You can add an effective farmland block for this tier. This block will be the farmland block that grants additional secondary seed drop chance.
```json
{
  "farmland": "mysticalagriculture:inferium_farmland"
}
```

### Fertilizable

You can disable the ability for crops of this tier to be fertilizable with Mystical Fertilizer or Fertilized Essence.
```json
{
  "fertilizable": false
}
```

### Secondary Seed Drop

You can disable the ability for crops of this tier to have a chance of dropping a second seed.
```json
{
  "secondarySeedDrop": false
}
```

## Example File

```json
{
  "name": "Test",
  "value": 10,
  "farmland": "mysticalagriculture:inferium_farmland",
  "essence": "mysticalagriculture:inferium_essence",
  "fertilizable": false,
  "secondarySeedDrop": false
}
```
