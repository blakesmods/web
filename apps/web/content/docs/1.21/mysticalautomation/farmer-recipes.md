---
id: farmer-recipes
title: Farmer Recipes
category: Mystical Automation
---

Mystical Automation allows you to easily add your own Farmer recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Farmer recipe. Syntax can be inferred from the example JSON below.

| Field     | Required | Description                                                             |
|-----------|----------|-------------------------------------------------------------------------|
| `type`    | ✓        | The recipe type must be `mysticalautomation:farmer`.                    |
| `seeds`   | ✓        | The item that will be placed in the Seed slot.                          |
| `soil`    | ✓        | The item that will be placed in the Soil slot.                          |
| `crux`    |          | The item that will be placed in the Crux slot.                          |
| `stages`  | ✓        | The amount of growth stages required for this recipe.                   |
| `results` | ✓        | The potential result items including their item and chance of dropping. |

### Example File

```json
{
  "type": "mysticalautomation:farmer",
  "seeds": {
    "item": "minecraft:carrot"
  },
  "soil": {
    "item": "minecraft:farmland"
  },
  "crux": {
    "item": "minecraft:cobblestone"
  },
  "stages": 7,
  "results": [
    {
      "item": {
        "id": "minecraft:apple"
      },
      "chance": 1.0
    },
    {
      "item": {
        "id": "minecraft:diamond"
      },
      "chance": 0.5
    }
  ]
}
```

## CraftTweaker

Mystical Automation allows you to easily add your own Farmer recipes using CraftTweaker.

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalautomation:farmer\>**!
::

### Adding A Recipe

```zenscript
<recipetype:mysticalautomation:farmer>.addRecipe(name, <seeds>, <soil>, stages, {results...});
<recipetype:mysticalautomation:farmer>.addRecipe(name, <seeds>, <soil>, <crux>, stages, {results...});
```

| Field     | Required | Description                                                               |
|-----------|----------|---------------------------------------------------------------------------|
| `name`    | ✓        | A unique name for this recipe. Must be all lower case and have no spaces. |
| `seeds`   | ✓        | The item that will be placed in the Seed slot.                            |
| `soil`    | ✓        | The item that will be placed in the Soil slot.                            |
| `crux`    |          | The item that will be placed in the Crux slot.                            |
| `stages`  | ✓        | The amount of growth stages required for this recipe.                     |
| `results` | ✓        | The potential result items including their item and chance of dropping.   |

#### Example

```zenscript
<recipetype:mysticalautomation:farmer>.addRecipe("test_farmer_no_crux",
  <item:mysticalagriculture:prosperity_seed_base>, <item:mysticalagriculture:inferium_farmland>, 3,
  {
    <item:minecraft:carrot>: 1.0 as float?,
    <item:minecraft:potato>: 0.25 as float?
  }
);

<recipetype:mysticalautomation:farmer>.addRecipe("test_farmer_crux",
  <item:mysticalagriculture:prosperity_seed_base>, <item:mysticalagriculture:prudentium_farmland>, <item:minecraft:cobblestone>, 5,
  {
    <item:minecraft:carrot>: 1.0 as float?,
    <item:minecraft:potato>: 0.25 as float?
  }
);
```

### Removing Recipes

```zenscript
<recipetype:mysticalautomation:farmer>.removeBySeeds(<seeds>);
```

| Field   | Required | Description                         |
|---------|----------|-------------------------------------|
| `seeds` | ✓        | The item to remove all recipes for. |
