---
id: singularities
title: Singularities
category: Extended Crafting
---
Extended Crafting allows you easily add your own Singularities. Here's how you do it.

## Adding Singularities
To add a singularity, you just need to add a singularity json file to the /config/extendedcrafting/singularities directory.

### The Singularity File
This section will go over the values available to use in a Singularity json. Syntax can be inferred from the example json below.
- `name`: The name of this singularity. You can either put the name you want to see here, or a translation key.
- `colors`: The overlay and underlay colors (in that order).
- `ingredient`: The item used to create this singularity.
- `materialCount`: The amount of materials required to create this singularity.
- `inUltimateSingularity`: (**optional**) Whether this singularity should be a part of the Ultimate Singularity recipe. If omitted will default to `true`.
- `enabled`: (**optional**) Whether this singularity should be registered. If omitted will default to `true`. (Added in version 4.1.0)

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
The different singularity types are defined using NBT data. This means there is an extra step involved in using a singularity in a crafting recipe.

### What To Do
You need to use an NBT ingredient for singularities. In the NBT tag you need to specify the singularity id.

```json
{
  "type": "forge:nbt",
  "item": "extendedcrafting:singularity",
  "nbt": {
    "Id": "extendedcrafting:diamond"
  }
}
```

**Note**: You can find the singularity id by enabling advanced tooltips (f3 + h), and seeing what it says.

## Removing Singularities
Just delete the singularity's file from `/config/extendedcrafting/singularities`. As of version 4.1.0, you can also add `"enabled": false` to the singularity file to disable it.
