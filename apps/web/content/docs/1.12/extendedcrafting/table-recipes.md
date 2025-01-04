---
id: table-recipes
title: Table Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Extended Crafting Table recipes using CraftTweaker.

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Table Crafting recipes.

### Adding A Shaped Recipe

```java
mods.extendedcrafting.TableCrafting.addShaped(<output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(<output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(<output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(<output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);  

mods.extendedcrafting.TableCrafting.addShaped(tier, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(tier, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(tier, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(tier, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);
```

| Field    | Required | Description                                                                                                                                                           |
|----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0.                                |
| `output` | ✓        | The output item of this recipe.                                                                                                                                       |
| `<>`     | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |

#### Example

```java
mods.extendedcrafting.TableCrafting.addShaped(2, <minecraft:stick>, [
  [<minecraft:emerald>, <minecraft:air>, <minecraft:air>], 
  [<minecraft:apple>, <minecraft:apple>, <minecraft:air>], 
  [<minecraft:apple>, <minecraft:air>, <minecraft:air>]
]);
```

### Adding A Shapeless Recipe

```java
mods.extendedcrafting.TableCrafting.addShapeless(<output>, [<input>, <input>]); 
mods.extendedcrafting.TableCrafting.addShapeless(tier, <output>, [<input>, <input>]);  
```

| Field    | Required | Description                                                                                                                            |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0. |
| `output` | ✓        | The output item of this recipe.                                                                                                        |
| `input`  | ✓        | An array of 1-81 items required to make the recipe.                                                                                    |

#### Example

```java
mods.extendedcrafting.TableCrafting.addShaped(2, <item:minecraft:stick>, [
  <minecraft:emerald>, <minecraft:emerald>, <minecraft:apple>, <minecraft:apple>
]);
```

### Removing Recipes

```java
mods.extendedcrafting.TableCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
