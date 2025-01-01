---
id: editing-types
title: Editing Crop Types
category: Mystical Customization
---

Mystical Customization allows you easily edit registered crop types.

## Editing A Crop Type

Crops are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-types.json`.

This file will contain an empty JSON object on first launch. You will use this as a crop type ID -> crop type changes map.

### Example Entry

```json
{
  "mysticalagriculture:resource": {
    "craftingSeed": "minecraft:carrot"
  }
}
```

## The configure-crops File

This section will go over the values available to use to edit crops. Syntax can be inferred from the example JSON below.

### Crafting Seed

You can change item to use as the crafting seed for all crops of this type.
```json
{
  "craftingSeed": "mysticalagriculture:soulium_seed_base"
}
```

## Example File

```json
{
  "mysticalagriculture:resource": {
    "craftingSeed": "minecraft:potato"
  },
  "mysticalagriculture:mob": {
    "craftingSeed": "minecraft:carrot"
  }
}
```
