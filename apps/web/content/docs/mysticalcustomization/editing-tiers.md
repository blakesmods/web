---
id: editing-tiers
title: Editing Crop Tiers
category: Mystical Customization
---

Mystical Customization allows you easily edit registered crop tiers. Here's how you do it.

## Editing A Crop Tier
Crop tiers are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-tiers.json`.

This file will contain an empty JSON object on first launch. You will use this as a crop tier ID -> crop tier changes map.

### Example Entry
```json
{
  "mysticalagriculture:1": {
    "name": "Uno",
    "essence": "mysticalagriculture:imperium_essence"
  }
}
```

## The configure-tiers File
This section will go over the values available to use to edit crop tiers. Syntax can be inferred from the example json below.

### Name
You can change the display name for a crop tier.
```json
{
  "name": "Test"
}
```

### Essence
You must change the essence item to be used in the crafting recipes of a tier's seeds.
```json
{
  "essence": "mysticalagriculture:tertium_essence"
}
```

### Farmland
You can change the effective farmland block for a tier. This block will be the farmland block that grants additional secondary seed drop chance.
```json
{
  "farmland": "mysticalagriculture:inferium_farmland"
}
```

### Fertilizable
You can disable the ability for crops of a tier to be fertilizable with Mystical Fertilizer or Fertilized Essence.
```json
{
  "fertilizable": false
}
```

### Secondary Seed Drop
You can disable the ability for crops of a tier to have a chance of dropping a second seed.
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
  "mysticalagriculture:2": {
    "name": "2, but Modified",
    "farmland": "mysticalagriculture:inferium_farmland",
    "essence": "mysticalagriculture:supremium_essence",
    "fertilizable": false,
    "secondarySeedDrop": false
  },
  "mysticalagriculture:5": {
    "name": "5, butt Modified",
    "essence": "minecraft:diamond"
  }
}
```
