---
id: soul-extraction-recipes
title: Soul Extraction Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Soul Extraction recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Soul Extraction recipe. Syntax can be inferred from the example JSON below.

| Field    | Required | Description                                                    |
|----------|----------|----------------------------------------------------------------|
| `type`   | ✓        | The recipe type must be `mysticalagriculture:soul_extraction`. |
| `input`  | ✓        | The item that will be placed in the input slot.                |
| `output` | ✓        | The souls granted from this item.                              |

### Example File

```json
{
  "type": "mysticalagriculture:soul_extraction",
  "input": "minecraft:blaze_powder",
  "result": {
    "type": "mysticalagriculture:blaze",
    "souls": 0.25
  }
}
```
