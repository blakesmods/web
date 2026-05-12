---
id: jetpack-json
title: Jetpack JSON
category: Iron Jetpacks
---

## Adding A Jetpack

Jetpacks are added via JSON files placed in `/config/ironjetpacks/jetpacks/`. Each file represents a new jetpack to be added.

## Editing A Jetpack

After the initial world load, all the default jetpack JSON files will be generated. You can then edit the values as you see fit.

## The Jetpack File

This section will go over the values available to use in a Jetpack file. Syntax can be inferred from the example json below.

::alert{title="Tip" icon="i-heroicons-light-bulb-solid"}
Use the stats of the default jetpacks to decide what the values should be for your custom jetpacks, since the values themselves are quite cryptic.
::

### Name
::badge{label="Required"}
::

The name of the jetpack. **This name must be all lower case and have underscores for spaces.** This will be used for registry names as well as localized names. The name will be formatted automatically for localized names, including spaces and capitalization.
```json
{
  "name": "emerald"
}
```

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
Translation keys will be automatically created for the provided jetpack name. For example, a jetpack with the name "emerald" will have the translation key "jetpack.emerald.name". You can use this key in your Resource Pack translation files to translate the name into different languages.
::

### Disable
::badge{label="Required"}
::

You can set the disable field to true to disable a jetpack. Alternatively, you could just delete the JSON file.
```json
{
  "disable": false
}
```

### Tier
::badge{label="Required"}
::

The crafting tier of the jetpack. Make sure there is at least 1 jetpack per tier, in succession (ex 1, 2, 3 all have at least one jetpack). Tier -1 is creative.
```json
{
  "tier": 5
}
```

### Color
::badge{label="Required"}
::

The color of the jetpack and related items as a HEX value.
```json
{
  "color": "41f384"
}
```

### Armor Points
::badge{label="Required"}
::

The amount of armor the jetpack should give when worn.
```json
{
  "armor_points": 4
}
```

### Enchantability
::badge{label="Required"}
::

How enchantable the jetpack should be.
```json
{
  "enchantability": 15
}
```

### Crafting Material
::badge{label="Required"}
::

The material used to craft the jetpack and its components. Syntax is `modid:itemid` for items and `tag:modid:tagid` for tag entries. You can also set the value to `"null"` to disable the recipes.
```json
{
  "crafting_material": "tag:c:gems/emerald"
}
```

### Creative

Is the jetpack a creative tier jetpack? Omitting this field will default to `false`.
```json
{
  "creative": false
}
```

### Rarity

The item rarity of this jetpack. This is basically just used to change the color of the tooltip. Valid values are 0-3. Omitting this field will default to `0`.
```json
{
  "rarity": 0
}
```

### Toughness

The amount of armor toughness this jetpack should give when worn.
```json
{
  "toughness": 0
}
```

### Knockback Resistance

The amount of knockback resistance this jetpack should give when worn.
```json
{
  "knockback_resistance": 0
}
```

### Curios

Whether this jetpack should be wearable as a Curio. They work as a Curio by default.
```json
{
  "curios": false
}
```

### Capacity
::badge{label="Required"}
::

How much FE (energy) this jetpack can hold.
```json
{
  "capacity": 48000000
}
```

### Usage
::badge{label="Required"}
::

How much FE this jetpack should use when flying/hovering.
```json
{
  "usage": 880
}
```

### Vertical Speed
::badge{label="Required"}
::

How fast the jetpack should fly upwards.
```json
{
  "vertical_speed": 1.03
}
```

### Vertical Acceleration
::badge{label="Required"}
::

How fast the initial takeoff is.
```json
{
  "vertical_acceleration": 0.17
}
```

### Sideways Speed
::badge{label="Required"}
::

How fast the jetpack should make you move forwards (when holding forwards).
```json
{
  "horizontal_speed": 0.21
}
```

### Ascending Hover Speed
::badge{label="Required"}
::

How fast the jetpack should ascend when hover mode is on, and you're flying.
```json
{
  "hover_ascend_speed": 0.45
}
```

### Descending Hover Speed
::badge{label="Required"}
::

How fast the jetpack should descend when hover mode is on, and you're sneaking.
```json
{
  "hover_descend_speed": 0.25
}
```

### Hover Speed
::badge{label="Required"}
::

How fast the jetpack should descend when hovering.
```json
{
  "hover_speed": 0.0
}
```

### Sprint Speed Multiplier
::badge{label="Required"}
::

How much faster the player should fly when sprinting while flying forwards.
```json
{
  "sprint_horizontal_speed_multiplier": 2.0
}
```

### Sprint Speed Vertical Multiplier 

How much faster the player should fly when sprinting while flying upwards. Omitting this field will default to `1.0`.
```json
{
  "sprint_vertical_speed_multiplier": 2.0
}
```

### Sprint Fuel Multiplier
::badge{label="Required"}
::

How much more fuel should the jetpack use while sprinting.
```json
{
  "sprint_fuel_usage_multiplier": 4.0
}
```

## Example File

```json
{
  "name": "emerald",
  "disable": false,
  "tier": 5,
  "color": "4dd979",
  "armor_points": 4,
  "enchantability": 15,
  "crafting_material": "tag:c:gems/emerald",
  "creative": false,
  "rarity": 0,
  "toughness": 0.0,
  "knockback_resistance": 0.0,
  "curios": true,
  "capacity": 48000000,
  "usage": 880,
  "vertical_speed": 1.03,
  "vertical_acceleration": 0.17,
  "horizontal_speed": 0.21,
  "hover_ascend_speed": 0.45,
  "hover_descend_speed": 0.25,
  "hover_speed": 0.0,
  "sprint_horizontal_speed_multiplier": 2.0,
  "sprint_vertical_speed_multiplier": 1.5,
  "sprint_fuel_usage_multiplier": 4.0
}
```
