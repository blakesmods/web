---
id: singularities
title: Singularities
category: Extended Crafting
---

Extended Crafting allows you easily add your own singularities.

## Adding Singularities

To add a singularity, you just need to add a singularity JSON file to the /config/extendedcrafting/singularities directory.

### The Singularity File

This section will go over the values available to use in a Singularity JSON. Syntax can be inferred from the example JSON below.

| Field                   | Required | Description                                                                                                      |
|-------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| `name`                  | ✓        | The name of this singularity. You can either put the name you want to see here, or a translation key.            |
| `colors`                | ✓        | The overlay and underlay colors (in that order).                                                                 |
| `ingredient`            |          | The item used to create this singularity.                                                                        |
| `materialCount`         |          | The amount of materials required to create this singularity. If omitted will use the default set in the config.  |
| `inUltimateSingularity` |          | Whether this singularity should be a part of the Ultimate Singularity recipe. If omitted will default to `true`. |

### Example File

```json
{
  "name": "Diamond",
  "colors": [
    "4AEDD9",
    "20C5B5"
  ],
  "ingredient": {
    "item": "minecraft:diamond"
  },
  "inUltimateSingularity": false
}
```

## Using In Recipes

The different Singularity types are defined using NBT data. This means there is an extra step involved in using a Singularity in a crafting recipe.

### What To Do

You need to use an NBT ingredient for Singularities. In the NBT tag you need to specify the Singularity ID.

```json
{
  "type": "forge:nbt",
  "item": "extendedcrafting:singularity",
  "nbt": {
    "Id": "extendedcrafting:diamond"
  }
}
```

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
You can find the Singularity ID by enabling advanced tooltips (f3 + h), and seeing what it says.
::

## Removing Singularities

You can either delete the Singularity's file from `/config/extendedcrafting/singularities` or add `"enabled": false` to the Singularity file to disable it.
