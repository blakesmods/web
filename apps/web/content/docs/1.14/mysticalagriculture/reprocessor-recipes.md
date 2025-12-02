---
id: reprocessor-recipes
title: Reprocessor Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Seed Reprocessor recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Seed Reprocessor recipe. Syntax can be inferred from the example JSON below.

| Field    | Required | Description                                                |
|----------|----------|------------------------------------------------------------|
| `type`   | ✓        | The recipe type must be `mysticalagriculture:reprocessor`. |
| `input`  | ✓        | The item that will be placed in the input slot.            |
| `result` | ✓        | The item that this recipe will output once finished.       |

### Example File

```json
{
  "type": "mysticalagriculture:reprocessor",
  "input": {
    "item": "minecraft:apple"
  },
  "result": {
    "item": "minecraft:potato"
  }
}
```
