---
id: reprocessor-recipes
title: Reprocessor Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Seed Reprocessor recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
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
    "id": "minecraft:potato"
  }
}
```

## CraftTweaker

Mystical Agriculture allows you easily add your own Reprocessor Crafting recipes using CraftTweaker.

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration  supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalagriculture:reprocessor\>**!
::

### Adding A recipe

```java
<recipetype:mysticalagriculture:reprocessor>.addRecipe(name, <output>, <input>);
```

| Field    | Required | Description                                                               |
|----------|----------|---------------------------------------------------------------------------|
| `name`   | ✓        | A unique name for this recipe. Must be all lower case and have no spaces. |
| `output` | ✓        | The output item for this recipe.                                          |
| `input`  | ✓        | The item that is required to make the output.                             |

#### Example

```java
<recipetype:mysticalagriculture:reprocessor>.addRecipe("test_reprocessor", <item:minecraft:apple>, <tag:item:c:ingots/iron>);
```

### Removing Recipes

```java
<recipetype:mysticalagriculture:reprocessor>.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
