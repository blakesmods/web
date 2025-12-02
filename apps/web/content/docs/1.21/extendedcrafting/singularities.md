---
id: singularities
title: Singularities
category: Extended Crafting
---

Extended Crafting allows you to easily add your own singularities.

## Adding Singularities

To add a Singularity, you just need to add a singularity JSON file to the `/config/extendedcrafting/singularities` directory.

### The Singularity File

This section will go over the values available to use in a singularity JSON. Syntax can be inferred from the example JSON below.

| Field                   | Required | Description                                                                                                      |
|-------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| `name`                  | ✓        | The name of this singularity. You can either put the name you want to see here, or a translation key.            |
| `colors`                | ✓        | The overlay and underlay colors (in that order).                                                                 |
| `ingredient`            | ✓        | The item used to create this singularity.                                                                        |
| `materialCount`         |          | The amount of materials required to create this singularity. If omitted will use the default set in the config.  |
| `inUltimateSingularity` |          | Whether this singularity should be a part of the Ultimate Singularity recipe. If omitted will default to `true`. |
| `enabled`               |          | Whether this singularity should be registered. If omitted will default to `true`.                                |

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

The different singularity types are defined using Data Components. This means there is an extra step involved in using a singularity in a crafting recipe.

### What To Do

You need to use a Data Component ingredient for singularities. In the Components tag you need to specify the Singularity ID.

```json
{
  "type": "neoforge:components",
  "items": "extendedcrafting:singularity",
  "components": {
    "extendedcrafting:singularity_id": "extendedcrafting:diamond"
  }
}
```

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
You can find the singularity ID by enabling advanced tooltips (f3 + h), and seeing what it says.
::

## Removing Singularities

You can either delete the singularity's file from `/config/extendedcrafting/singularities` or add `"enabled": false` to the singularity file to disable it.
