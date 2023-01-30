---
id: editing-mobsoultypes
title: Editing Mob Soul Types
category: Mystical Customization
---

Mystical Customization allows you easily edit registered mob soul types. Here's how you do it.

## Editing A Mob Soul Type
Mob soul types are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-mobsoultypes.json`.

This file will contain an empty JSON object on first launch. You will use this as a mob soul type ID -> mob soul type changes map.

### Example Entry
```json
{
  "mysticalagriculture:zombie": {
    "name": "Undead Brothers",
    "souls": 300
  }
}
```

## The configure-mobsoultypes File
This section will go over the values available to use to edit mob soul types. Syntax can be inferred from the example json below.

### Name
You can change the name of a mob soul type.
```json
{
  "name": "Animals"
}
```

### Souls
You can change the amount of souls required for a mob soul type.
```json
{
  "souls": 10.5
}
```

### Entities
<badge color="green">2.1.5+</badge>

You can add or remove entities from a mob soul type. These use an array of entity ids to define which entities should be added or removed. Do note that an entity can only be added to a single mob soul type at a time, so make sure to remove the entities from their current mob soul types if applicable.
```json
{
  "entities": {
    "add": [
      "minecraft:skeleton"
    ],
    "remove": [
      "minecraft:spider"
    ]
  }
}
```

### Color
You can change the color of the Soul Jar for a mob soul type. Colors are set using HEX values.
```json
{
  "color": "aaaaaa" 
}
```

### Enabled
<badge color="green">2.1.2+</badge>

You can disable a mob soul type if you want to hide it and make it unobtainable.
```json
{
  "enabled": false
}
```

## Example File
```json
{
  "mysticalagriculture:zombie": {
    "name": "Zombie, but Modified",
    "souls": 23,
    "color": "3434a1"
  },
  "mysticalagriculture:skeleton": {
    "souls": 5000
  }
}
```
