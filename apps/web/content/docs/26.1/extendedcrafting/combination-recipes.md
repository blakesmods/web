---
id: combination-recipes 
title: Combination Recipes 
category: Extended Crafting
---

Extended Crafting allows you to easily add your own Combination Crafting recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Combination Crafting recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                                         |
|---------------|----------|-------------------------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `extendedcrafting:combination`.                             |
| `power_cost`  | ✓        | The amount of power required to craft this recipe.                                  |
| `power_rate`  |          | The amount of power consumed per tick. If omitted will default to the config value. |
| `input`       | ✓        | The item that will be placed on the Crafting Core.                                  |
| `ingredients` | ✓        | An array of 1-48 items that will be placed on the Pedestals.                        |
| `result`      | ✓        | The item that this recipe will output once finished.                                |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Combination recipe takes to complete is power_cost / power_rate.
::

### Example File

```json
{
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": "minecraft:iron_ingot",
  "ingredients": [
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato",
    "minecraft:potato"
  ],
  "result": {
    "id": "minecraft:stone"
  }
}
```
