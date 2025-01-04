---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Ender Crafting recipes using CraftTweaker.

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Ender Crafting recipes.

### Adding A Shaped Recipe

```java
mods.extendedcrafting.EnderCrafting.addShaped(<output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], seconds);  
```

| Field     | Required | Description                                                                                                                                                           |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | ✓        | The output item for this recipe.                                                                                                                                      |
| `<>`      | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |
| `seconds` |          | The amount of seconds this recipe should take with a single Alternator. If this parameter isn't added, it will use the default rate defined in the config file.       |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

#### Example

```java
mods.extendedcrafting.EnderCrafting.addShaped(<minecraft:stick>, [
  [<minecraft:apple>, <minecraft:apple>, <minecraft:apple>], 
  [<minecraft:carrot>, <minecraft:carrot>, <minecraft:apple>], 
  [<minecraft:carrot>, <minecraft:apple>, <minecraft:apple>]
], 500);
```

### Adding A Shapeless Recipe

```java
mods.extendedcrafting.EnderCrafting.addShapeless(<output>, [inputs], seconds); 
```

| Field     | Required | Description                                                                                                                                                     |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | ✓        | The output item for this recipe.                                                                                                                                |
| `inputs`  | ✓        | An array of 1-9 items required to make the recipe.                                                                                                              |
| `seconds` |          | The amount of seconds this recipe should take with a single Alternator. If this parameter isn't added, it will use the default rate defined in the config file. |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

#### Example

```java
mods.extendedcrafting.EnderCrafting.addShapeless(<minecraft:cobblestone>, [
  <minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>, <minecraft:diamond>
], 30);
```

### Removing Recipes

```java
mods.extendedcrafting.EnderCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
