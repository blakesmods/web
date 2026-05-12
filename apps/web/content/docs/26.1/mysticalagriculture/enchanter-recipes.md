---
id: enchanter-recipes
title: Enchanter Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Enchanter recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Enchanter recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                                                                                                                                                 |
|---------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `mysticalagriculture:enchanter`.                                                                                                                                    |
| `ingredients` | ✓        | A list of 1-2 input ingredients. Each ingredient has a count for the amount of items needed per enchantment level. Note that the highest enchantment level cannot be larger than 512 items. |
| `enchantment` | ✓        | The ID of the resulting enchantment.                                                                                                                                                        |

### Example File

```json
{
  "type": "mysticalagriculture:enchanter",
  "ingredients": [
    {
      "ingredient": "minecraft:cobblestone",
      "count": 12
    },
    {
      "ingredient": "mysticalagriculture:experience_essence",
      "count": 16
    }
  ],
  "enchantment": "minecraft:impaling"
}
```
