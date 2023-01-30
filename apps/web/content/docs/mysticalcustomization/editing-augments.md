---
id: editing-augments
title: Editing Augments
category: Mystical Customization
---

Mystical Customization allows you easily edit registered Augments. Here's how you do it.

## Editing An Augment
Augments are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-augments.json`.

This file will contain an empty JSON object on first launch. You will use this as an Augment ID -> Augment changes map.

### Example Entry
```json
{
  "mysticalagriculture:strength_iii": {
    "enabled": false
  }
}
```

## The configure-augments File
This section will go over the values available to use to edit Augments. Syntax can be inferred from the example json below.

### Enabled
You can disable an augment if you want to hide it.
```json
{
  "enabled": false
}
```

## Example File
```json
{
  "mysticalagriculture:strength_iii": {
    "enabled": false
  }
}
```
