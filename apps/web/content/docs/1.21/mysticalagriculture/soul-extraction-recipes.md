---
id: soul-extraction-recipes
title: Soul Extraction Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you to easily add your own Soul Extraction recipes using both Datapacks and CraftTweaker.

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
  "input": {
    "item": "minecraft:blaze_powder"
  },
  "result": {
    "type": "mysticalagriculture:blaze",
    "souls": 0.25
  }
}
```

## CraftTweaker

Mystical Agriculture allows you to easily add your own Soul Extraction recipes using CraftTweaker.

::alert{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalagriculture:soul_extraction\>**!
::

### Adding A Recipe

```java
<recipetype:mysticalagriculture:soul_extraction>.addRecipe(name, <input>, "type", souls);
```

| Field   | Required | Description                                                               |
|---------|----------|---------------------------------------------------------------------------|
| `name`  | ✓        | A unique name for this recipe. Must be all lower case and have no spaces. |
| `input` | ✓        | The item that is required to make the output.                             |
| `type`  | ✓        | The id of the resulting mob soul type.                                    |
| `souls` | ✓        | The amount of the resulting mob soul type.                                |

#### Example

```java
<recipetype:mysticalagriculture:soul_extraction>.addRecipe("test", <tag:item:c:ingots/iron>, "mysticalagriculture:spider", 0.5);
```

### Removing Recipes
#### Remove By Item

```java
<recipetype:mysticalagriculture:soul_extraction>.removeByInput(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |

#### Remove By Mob Soul Type

```java
<recipetype:mysticalagriculture:soul_extraction>.removeByMobSoulType("type");
```

| Field  | Required | Description                                  |
|--------|----------|----------------------------------------------|
| `type` | ✓        | The mob soul type to remove all recipes for. |
