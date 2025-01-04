---
id: infusion-recipes
title: Infusion Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Infusion Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Infusion Crafting recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                          |
|---------------|----------|----------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `mysticalagriculture:infusion`.              |
| `input`       | ✓        | The item that will be placed on the Infusion Altar.                  |
| `ingredients` | ✓        | An array of 1-8 items that will be placed on the Infusion Pedestals. |
| `result`      | ✓        | The item that this recipe will output once finished.                 |

### Example File

```json
{
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": "minecraft:apple"
  },
  "ingredients": [
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    }
  ],
  "result": {
    "item": "minecraft:potato"
  }
}
```
