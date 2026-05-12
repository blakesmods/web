---
id: soulium-spawner-recipes
title: Soulium Spawner Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Soulium Spawner recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Soulium Spawner recipe. Syntax can be inferred from the example JSON below.

| Field      | Required | Description                                                                                                                                                                                                                |
|------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | ✓        | The recipe type must be `mysticalagriculture:soulium_spawner`.                                                                                                                                                             |
| `input`    | ✓        | The item that will be placed in the input slot with an optional count of how many items are required per spawn. Max 512.                                                                                                   |
| `entities` | ✓        | A weighted list of entities to spawn. Each entity is listed as an object with an `entity` field, which takes an entity ID, and an optional `weight` field, which specifies the spawn weight relative to all other entries. |

### Example File

```json
{
  "type": "mysticalagriculture:soulium_spawner",
  "input": {
    "ingredient": "mysticalagriculture:zombie_essence",
    "count": 16
  },
  "entities": [
    {
      "entity": "minecraft:zombie",
      "weight": 19
    },
    {
      "entity": "minecraft:zombie_villager",
      "weight": 1
    }
  ]
}
```
