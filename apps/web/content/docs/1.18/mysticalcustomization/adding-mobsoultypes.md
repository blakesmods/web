---
id: adding-mobsoultypes
title: Adding Mob Soul Types
category: Mystical Customization
---

Mystical Customization allows you easily add your own mob soul types.

## Adding A Mob Soul Type

Mob soul types are added via JSON files placed in `/config/mysticalcustomization/mobsoultypes/`. Each file represents a new mob soul type to be added.

::callout{title="Important" icon="i-heroicons-information-circle-solid"}
The name of the file is used as the mob soul type's ID. The ID **must** be all lowercase with underscores '_' in place of spaces. 
::

## The Mob Soul Type File

This section will go over the values available to use in mob soul type file. Syntax can be inferred from the example JSON below.

### Name

You can manually set a name for this mob soul type. If you plan to use more than one entity you should probably use this.
```json
{
  "name": "Animals"
}
```
Omitting this field will use the default display name for the provided entity.

### Souls
::u-badge{label="Required"}
::

You must assign this mob soul type a required amount of souls.
```json
{
  "souls": 10.5
}
```

### Entities
::u-badge{label="Required"}
::

You must assign entities to this mob soul type.
```json
{
  "entities": [
    "minecraft:panda",
    "minecraft:polar_bear"
  ]
}
```

You can also just specify a single entity instead.
```json
{
  "entity": "minecraft:panda"
}
```

### Color

You should set the color of the Soul Jar for this mob soul type. Colors are set using HEX values.
```json
{
  "color": "#aaaaaa" 
}
```

### Enabled

You can disable this mob soul type during the creation process if you want.
```json
{
  "enabled": false
}
```

## Example File

```json
{
  "name": "Test",
  "souls": 50,
  "entities": [
    "minecraft:panda",
    "minecraft:polar_bear"
  ],
  "color": "abcabc"
}
```
