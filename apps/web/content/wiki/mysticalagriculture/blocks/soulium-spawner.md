---
id: soulium-spawner
title: Soulium Spawner
icon: /assets/mysticalagriculture/blocks/soulium_spawner.png
sort: 63
version: 7.0.5
---

## Overview

The Soulium Spawner is a machine that uses [Mob Essences](../items/resource-essences.md) to spawn mobs.

## Usage

The Soulium Spawner require energy to function. You can either provide energy via any Forge Energy compatible energy transfer, or use the internal solid-fuel based generator.

Place some essences in the input slot and provide power. After processing time has completed a mob will be spawned randomly in a 3 block radius around the spawner. The spawner can be upgraded with a [Machine Upgrade](../items/machine-upgrades.md) to increase the operation speed.

The spawner will not be able to spawn mobs if there are 32 or more entities of the type being spawned within its spawn radius.

## Screen Overview

![](/assets/mysticalagriculture/screens/soulium_spawner_screen.png)

1. **Energy Bar:** Displays the amount of energy this block contains.
2. **Fuel Slot:** Burnable items can be placed here to generate energy.
3. **Input Slot:** Place your input ingredients here.
4. **Output Entity Display:** A display of the entities that would spawn based on the input.
5. **Upgrade Slot:** Place a [Machine Upgrade](../items/machine-upgrades.md) here to upgrade the machine.

## Screenshots

::screenshots
---
screenshots:
  - name: Soulium Spawner
    description: A Soulium Spawner with Zombie Essence in the process of spawning a Zombie.
    image: /assets/mysticalagriculture/screenshots/soulium_spawner_1.png
---
::
