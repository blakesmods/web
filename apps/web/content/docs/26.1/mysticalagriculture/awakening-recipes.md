---
id: awakening-recipes
title: Awakening Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Awakening recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Awakening recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                           |
|---------------|----------|-----------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `mysticalagriculture:awakening`.              |
| `input`       | ✓        | The item that will be placed on the Awakening Altar.                  |
| `essences`    | ✓        | An array of 1-4 items that will be placed in the Essence Vessels.     |
| `ingredients` | ✓        | An array of 1-4 items that will be placed on the Awakening Pedestals. |
| `result`      | ✓        | The item that this recipe will output once finished.                  |

### Example File

```json
{
  "type": "mysticalagriculture:awakening",
  "essences": [
    {
      "ingredient": "mysticalagriculture:diamond_essence",
      "count": 20
    },
    {
      "ingredient": "minecraft:carrot",
      "count": 40
    },
    {
      "ingredient": "minecraft:cobblestone",
      "count": 10
    },
    {
      "ingredient": "mysticalagriculture:supremium_essence",
      "count": 15
    }
  ],
  "input": "minecraft:apple",
  "ingredients": [
    "minecraft:carrot",
    "minecraft:carrot",
    "minecraft:carrot",
    "minecraft:carrot"
  ],
  "result": {
    "id": "minecraft:potato"
  }
}
```

### Essence Vessel Colors

By default, the 4 elemental essences have colors assigned. To set the colors for any additional items you plan on using, you can create a datapack containing an `mysticalagriculture/essence_vessel_colors.json` file.

This file is a single JSON object where the keys are the item IDs and the values are hex color codes. Below is the `essence_vessel_colors.json` included in the mod by default.
```json
{
  "mysticalagriculture:air_essence": "#DAD64D",
  "mysticalagriculture:earth_essence": "#54DA4D",
  "mysticalagriculture:water_essence": "#4D7EDA",
  "mysticalagriculture:fire_essence": "#DA4D4D"
}
```
