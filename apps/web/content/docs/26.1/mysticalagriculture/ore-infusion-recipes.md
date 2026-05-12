---
id: ore-infusion-recipes
title: Ore Infusion Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Ore Infusion recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Ore Infusion recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                 |
|---------------|----------|-------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `mysticalagriculture:ore_infusion`. |
| `ingredients` | ✓        | The items that will be placed in the input slots.           |
| `result`      | ✓        | The item that this recipe will output once finished.        |

### Example File

```json
{
  "type": "mysticalagriculture:ore_infusion",
  "ingredients": [
    {
      "ingredient": "minecraft:stone",
      "count": 1
    },
    {
      "ingredient": "mysticalagriculture:iron_essence",
      "count": 4
    }
  ],
  "result": {
    "id": "minecraft:iron_ore",
    "count": 1
  }
}
```
