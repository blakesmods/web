---
id: adding-tiers
title: Adding Crop Tiers
category: Mystical Customization
---

Mystical Customization allows you easily add your own crop tiers. Here's how you do it.

## Adding A Crop Tier
Crop tiers are added via JSON files placed in `/config/mysticalcustomization/tiers/`. Each file represents a new crop tier to be added.

**Important:** The name of the file is used as the crop tiers ID. The ID **must** be all lowercase with underscores '_' in place of spaces.

## The Crop Tier File
This section will go over the values available to use in crop tier file. Syntax can be inferred from the example json below.

**Note:** Any field below marked with a yellow badge is required. Any field marked with a green badge requires at least the version specified.

### Name
You can manually define the display name for this crop tier.
```json
{
  "name": "Test"
}
```
Omitting this field will auto generate a translation key with the format `cropTier.mysticalcustomization.{id}`.

### Value
<badge>Required</badge>

You must assign an integer tier value to this tier. This is used internally to sort tiers. Higher value = higher tier. For example `mysticalagriculture:elemental` has a tier value of 1.
```json
{
  "value": 7
}
```

### Essence
<badge>Required</badge>

You must set an essence item to be used in the crafting recipes of this tiers seeds.
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

### Base Secondary Drop Chance
<badge color="green">3.0.1+</badge>

You can modify the base chance of a second seed/essence dropping from the this crop tier's crops when planted on a valid farmland. Can be any value from 0.0 to 1.0.

**Note:** This value gets overridden by the `baseSecondaryChance` value of a crop if specified.
```json
{
  "baseSecondaryChance": 0.4
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
