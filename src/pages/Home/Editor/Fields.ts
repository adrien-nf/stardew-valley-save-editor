import { Path } from "../../../enums/Path";

export type FieldType = "text" | "number" | "boolean"

export interface Field {
	key: keyof typeof Path,
	type: FieldType
}

export interface Block {
	key: string,
	fields: Field[]
}

const PlayerInfos: Block = {
	key: "PLAYER_INFOS",
	fields: [
		{
			key: "PLAYER_NAME",
			type: "text",
		},
		{
			key: "PLAYER_FARM_NAME",
			type: "text",
		},
		{
			key: "PLAYER_IS_MALE",
			type: "boolean",
		},
		{
			key: "PLAYER_FAVOURITE_THING",
			type: "text",
		},
		{
			key: "PLAYER_HORSE_NAME",
			type: "text",
		},
		{
			key: "PLAYER_CAT_PERSON",
			type: "boolean",
		},
	],
};

const PlayerCharacteristics: Block = {
	key: "PLAYER_CHARACTERISTICS",
	fields: [
		{
			key: "PLAYER_MAX_STAMINA",
			type: "number",
		},
		{
			key: "PLAYER_MAX_HEALTH",
			type: "number",
		},
		{
			key: "PLAYER_MONEY",
			type: "number",
		},
		{
			key: "PLAYER_TOTAL_MONEY_EARNED",
			type: "number",
		},
		{
			key: "PLAYER_CLUB_COINS",
			type: "number",
		},
	],
}

const PlayerMisc: Block = {
	key: "MISC",
	fields:
		[
			{
				key: "PLAYER_CAVE_CHOICE",
				type: "boolean",
			},
			{
				key: "PLAYER_MAX_ITEMS",
				type: "number",
			},
			{
				key: "PLAYER_SAVE_TIME",
				type: "number",
			},
		]
}

// export const FarmForm: Block = {
// 	key: "FARM_FORM",
// 	fields: [
// 		{
// 			key: "PLAYER_NAME",
// 			type: "text",
// 		},
// 	],
// }

// export const MiscellaneousForm: Block[] = [
// 	{
// 		key: "MISC",
// 		fields: [
// 			{
// 				key: "PLAYER_NAME",
// 				type: "text",
// 			},
// 		],
// 	},
// ];

export const Blocks: Block[] = [
	PlayerInfos,
	PlayerCharacteristics,
	// PlayerMisc,
	// FarmForm
]