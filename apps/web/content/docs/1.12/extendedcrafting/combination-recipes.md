---
id: combination-recipes 
title: Combination Recipes 
category: Extended Crafting
---

Extended Crafting allows you easily add your own Combination Crafting recipes using CraftTweaker.

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Combination Crafting recipes.

### Adding A Recipe

```java
mods.extendedcrafting.CombinationCrafting.addRecipe(<output>, powerCost, <input>, [inputs]);
mods.extendedcrafting.CombinationCrafting.addRecipe(<output>, powerCost, powerRate, <input>, [inputs]);
```

| Field       | Required | Description                                                                                                                                                                                 |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`    | ✓        | The output item for this recipe.                                                                                                                                                            |
| `powerCost` | ✓        | The amount of FE required to craft this recipe.                                                                                                                                             |
| `powerRate` |          | The rate the recipe should consume FE. powerCost / powerRate = the number of ticks required to craft the recipe. If this isn't defined it will use the default value defined in the config. |
| `input`     | ✓        | The item that will be placed on the Crafting Core.                                                                                                                                          |
| `inputs`    | ✓        | An array of 0-48 items. The first item is the item that goes on the Crafting Core, and the rest go on the pedestals.                                                                        |


#### Example

```java
mods.extendedcrafting.CombinationCrafting.addRecipe(<minecraft:stick> * 10, 10000, 100, <minecraft:diamond>, [<ore:ingotIron>, <minecraft:stick>]);
```

### Removing Recipes

```java
mods.extendedcrafting.CombinationCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
