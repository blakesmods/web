---
id: soulium-spawner-recipes
title: Soulium Spawner Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Soulium Spawner recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Soulium Spawner recipe. Syntax can be inferred from the example JSON below.

| Field      | Required | Description                                                                                                                                                                                                                |
|------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | ✓        | The recipe type must be `mysticalagriculture:soulium_spawner`.                                                                                                                                                             |
| `input`    | ✓        | The item that will be placed in the input slot with an optional count of how many items are required per spawn. Max 512.                                                                                                   |
| `entities` | ✓        | A weighted list of entities to spawn. Each entity is listed as an object with an `entity` field, which takes an entity ID, and an optional `weight` field, which specifies the spawn weight relative to all other entries. |

### Example File

```json
{
  "type": "mysticalagriculture:soulium_spawner",
  "input": {
    "item": "mysticalagriculture:zombie_essence",
    "count": 16
  },
  "entities": [
    {
      "entity": "minecraft:zombie",
      "weight": 19
    },
    {
      "entity": "minecraft:zombie_villager",
      "weight": 1
    }
  ]
}
```

## CraftTweaker

Mystical Agriculture allows you easily add your own Soulium Spawner recipes using CraftTweaker.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalagriculture:soulium_spawner\>**!
::

### Adding A Recipe

```java
<recipetype:mysticalagriculture:soulium_spawner>.addRecipe(name, <input>, input_count, [entities]);
```

| Field         | Required | Description                                                                                                                                          |
|---------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                            |
| `input`       | ✓        | The item that is required to make the output.                                                                                                        |
| `input_count` | ✓        | The amount of the `input` item required to spawn a mob. Max 512.                                                                                     |
| `entities`    | ✓        | The IDs of the entities that will be spawned using the provided `input` items. Entity IDs can be appended with `@<weight>` to specify spawn weights. |

#### Example

```java
<recipetype:mysticalagriculture:soulium_spawner>.addRecipe("test_spawner", <item:minecraft:apple>, 20, ["minecraft:zombie"]);
<recipetype:mysticalagriculture:soulium_spawner>.addRecipe("test_spawner_weights", <item:minecraft:carrot>, 16, ["minecraft:skeleton@5", "minecraft:wither_skeleton@1"]);
```

### Removing Recipes
#### Remove By Entity ID

```java
<recipetype:mysticalagriculture:soulium_spawner>.removeByEntity("entity");
```

| Field    | Required | Description                           |
|----------|----------|---------------------------------------|
| `entity` | ✓        | The entity to remove all recipes for. |
