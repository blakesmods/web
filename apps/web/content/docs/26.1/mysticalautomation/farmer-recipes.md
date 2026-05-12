---
id: farmer-recipes
title: Farmer Recipes
category: Mystical Automation
---

Mystical Automation allows you to easily add your own Farmer recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Farmer recipe. Syntax can be inferred from the example JSON below.

| Field     | Required | Description                                                             |
|-----------|----------|-------------------------------------------------------------------------|
| `type`    | ✓        | The recipe type must be `mysticalautomation:farmer`.                    |
| `seeds`   | ✓        | The item that will be placed in the Seed slot.                          |
| `soil`    | ✓        | The item that will be placed in the Soil slot.                          |
| `crux`    |          | The item that will be placed in the Crux slot.                          |
| `stages`  | ✓        | The amount of growth stages required for this recipe.                   |
| `results` | ✓        | The potential result items including their item and chance of dropping. |

### Example File

```json
{
  "type": "mysticalautomation:farmer",
  "seeds": "minecraft:carrot",
  "soil": "minecraft:farmland",
  "stages": 7,
  "results": [
    {
      "item": {
        "id": "minecraft:carrot",
        "count": 2
      },
      "chance": 1.0
    },
    {
      "item": {
        "id": "minecraft:carrot",
        "count": 1
      },
      "chance": 0.5
    }
  ]
}
```
