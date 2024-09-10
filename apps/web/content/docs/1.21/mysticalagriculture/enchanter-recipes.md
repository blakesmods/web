---
id: enchanter-recipes
title: Enchanter Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Enchanter recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Seed Reprocessor recipe. Syntax can be inferred from the example json below.

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
      "item": "minecraft:ice",
      "count": 24
    },
    {
      "item": "mysticalagriculture:experience_essence",
      "count": 64
    }
  ],
  "enchantment": "minecraft:frost_walker"
}
```

## CraftTweaker

Mystical Agriculture allows you easily add your own Enchanter recipes using CraftTweaker. Here's how you do it.

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalagriculture:enchanter\>**!
::

### Adding a recipe

```java
<recipetype:mysticalagriculture:enchanter>.addRecipe(name, <enchantment>, [<inputs>]);
```

| Field         | Required | Description                                                                                                                                                                                 |
|---------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                                                   |
| `enchantment` | ✓        | The ID of the resulting enchantment.                                                                                                                                                        |
| `inputs`      | ✓        | A list of 1-2 input ingredients. Each ingredient has a count for the amount of items needed per enchantment level. Note that the highest enchantment level cannot be larger than 512 items. |

#### Example

```java
<recipetype:mysticalagriculture:enchanter>.addRecipe("fancy_sharpness", "minecraft:protection", [
    <item:minecraft:carrot> * 24, <item:minecraft:cobblestone> * 128
]);
```

### Removing Recipes

```java
<recipetype:mysticalagriculture:enchanter>.removeByEnchantment(<enchantment>);
```

| Field         | Required | Description                                          |
|---------------|----------|------------------------------------------------------|
| `enchantment` | ✓        | The ID of the enchantment to remove all recipes for. |
