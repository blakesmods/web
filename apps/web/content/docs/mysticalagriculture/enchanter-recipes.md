---
id: enchanter-recipes
title: Enchanter Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Enchanter recipes. Here's how you do it.

## Datapacks

<alert title="Prerequisites">
  <ul>
    <li>
      You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack">here</a>.
    </li>
    <li>
      You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe">here</a>.
    </li>
  </ul>
</alert>

### The Recipe File
This section will go over the values available to use in a Seed Reprocessor recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:enchanter`.
- `ingredients`: A list of 1-2 input ingredients. Each ingredient has a count for the amount of items needed per enchantment level. Note that the highest enchantment level cannot be larger than 512 items.
- `enchantment`: The ID of the resulting enchantment.

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
As of version 7.0.3, Mystical Agriculture allows you easily add your own Enchanter recipes using CraftTweaker. Here's how you do it.

### Adding a recipe
```java
mods.mysticalagriculture.EnchanterCrafting.addRecipe(name, <enchantment>, [<inputs>]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `input`: The item that is required to make the output.

#### Example
```java
mods.mysticalagriculture.EnchanterCrafting.addRecipe("fancy_sharpness", "minecraft:protection", [
    <item:minecraft:carrot> * 24, <item:minecraft:cobblestone> * 128
]);
```

### Removing Recipes
```java
mods.mysticalagriculture.EnchanterCrafting.remove(<enchantment>);
```

- `enchantment`: The ID of the enchantment to remove all recipes for.
