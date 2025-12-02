---
id: usage-in-recipes
title: Usage in Recipes
category: Iron Jetpacks
---

::alert{title="Important" icon="i-heroicons-information-circle-solid"}
These ingredients are only available in version 5.0.0 or later!
::

## Using In Recipes

The different jetpack types are defined using NBT data. This means there is an extra step involved in using a Jetpack (or it's crafting components) in a crafting recipe.

### Jetpack Components

You need to use a Jetpack Component ingredient for Jetpacks and their crafting components.

| Field       | Required | Description                                                                     |
|-------------|----------|---------------------------------------------------------------------------------|
| `type`      | ✓        | The custom Ingredient type must be `ironjetpacks:jetpack_component`.            |
| `component` | ✓        | The item you want. Must be one of `jetpack`, `cell`, `thruster` or `capacitor`. |
| `jetpack`   | ✓        | The Jetpack ID.                                                                 |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
You can find the Jetpack ID by enabling advanced tooltips (F3 + h), and checking the ID by hovering over a Jetpack.
::

#### Example

```json
{
  "type": "ironjetpacks:jetpack_component",
  "component": "jetpack",
  "jetpack": "ironjetpacks:iron"
}
```

### Jetpack Tiers

If you want to create recipes that can accept any Jetpack of a tier, similarly to the default Jetpack upgrade recipes, then you can use the Jetpack Tier ingredient.

| Field  | Required | Description                                                     |
|--------|----------|-----------------------------------------------------------------|
| `type` | ✓        | The custom Ingredient type must be `ironjetpacks:jetpack_tier`. |
| `tier` | ✓        | The numerical Jetpack tier.                                     |

#### Example

```json
{
  "type": "ironjetpacks:jetpack_tier",
  "tier": 2
}
```

### Jetpacks as Recipe Output

Since each jetpack is differentiated using NBT, you will need to provide the NBT in the recipe result item.

#### Example

```json
{
  "result": {
    "item": "ironjetpacks:jetpack",
    "nbt": {
      "Id": "ironjetpacks:diamond"
    }
  }
}
```
