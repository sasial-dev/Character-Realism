# Character Realism

By: CloneTrooper1019<br>
Ported to roblox-ts by: sasial-dev<br>

## What is this?

*Realism* is a character enhancement system for Roblox designed to be adaptive and minimally invasive to existing game code. It allows players to see their avatar's body in first person and look around with their head in third person. It additionally override's Roblox's default walking sound with a set of material-based walking sounds. 

## Features

- Compatible with real-time avatar scaling and HumanoidDescription changes.
- Interpolated 100% on the client, no snapping or lag.
- Supports both R6 and R15 avatars.

## Installation

`npm install @rbxts/character-realism`

## Usage

```ts
import "@rbxts/character-realism/server"
```

```ts
import CharacterRealism from "@rbxts/character-realism/client";

CharacterRealism.Start({
	Sounds: {
		Dirt: 178054124,
		Wood: 177940988,
		Concrete: 277067660,
		Grass: 4776173570,
		Metal: 4790537991,
		Sand: 4777003964,
		Fabric: 4776951843,
		Gravel: 4776998555,
		Marble: 4776962643,
	},

	MaterialMap: {
		Mud: "Dirt",
		Pebble: "Dirt",
		Ground: "Dirt",

		Sand: "Sand",
		Snow: "Sand",
		Sandstone: "Sand",

		Rock: "Gravel",
		Basalt: "Gravel",
		Asphalt: "Gravel",
		Glacier: "Gravel",
		Slate: "Gravel",

		WoodPlanks: "Wood",
		LeafyGrass: "Grass",

		Ice: "Marble",
		Salt: "Marble",
		Marble: "Marble",
		Pavement: "Marble",
		Limestone: "Marble",

		Foil: "Metal",
		DiamondPlate: "Metal",
		CorrodedMetal: "Metal",
	},

	RotationFactors: {
		Head: {
			Pitch: 0.8,
			Yaw: 0.75,
		},

		UpperTorso: {
			Pitch: 0.5,
			Yaw: 0.5,
		},

		LeftUpperArm: {
			Pitch: 0.0,
			Yaw: -0.5,
		},

		RightUpperArm: {
			Pitch: 0.0,
			Yaw: -0.5,
		},

		Torso: {
			Pitch: 0.4,
			Yaw: 0.2,
		},

		["Left Arm"]: {
			Pitch: 0.0,
			Yaw: -0.5,
		},

		["Right Arm"]: {
			Pitch: 0.0,
			Yaw: -0.5,
		},

		["Left Leg"]: {
			Pitch: 0.0,
			Yaw: -0.2,
		},

		["Right Leg"]: {
			Pitch: 0.0,
			Yaw: -0.2,
		},
	},
});
```

## Licensing

*Realism* is licensed under v2.0 of the Mozilla Public License. The intent of using this license is to allow the system to be used commercially in Roblox games for free without requiring the entire source code of the game to be disclosed. However, any improvements that you make to the system itself which could benefit others using it should be publicly disclosed under the same conditions. You must also provide credit to CloneTrooper1019 somewhere in your game if you use this system. This can be either the description or an in-game credits feature. Whatever suits you best :)!
