---
id: infusion-recipes
title: Infusion Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Infusion Crafting recipes. Here's how you do it.

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
This section will go over the values available to use in an Infusion Crafting recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:infusion`.
- `input`: The item that will be placed on the Infusion Altar.
- `ingredients`: An array of 1-8 items that will be placed on the Infusion Pedestals.
- `result`: The item that this recipe will output once finished.

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

## CraftTweaker
As of version 3.0.8, Mystical Agriculture allows you easily add your own Infusion Crafting recipes using CraftTweaker. Here's how you do it.

::alert{title="Recipe Manager"}
As of version **7.0.4**, CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers!</a> Access all applicable methods using **\<recipetype:mysticalagriculture:infusion\>**!
::

### Adding A Recipe
```java
mods.mysticalagriculture.InfusionCrafting.addRecipe(name, <output>, [inputs]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `inputs`: An array of 1-9 items. The first item is the item that goes on the Infusion Altar, and the rest go on the pedestals.

#### Example
```java
mods.mysticalagriculture.InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```

### Removing Recipes
```java
mods.mysticalagriculture.InfusionCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.
