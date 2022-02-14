import { genUUID } from "../helpers/uuid";

export const getToDoList = () => {
	return [
		{
			id: genUUID(),
			content:
				"Magna exercitation laborum qui non proident est nostrud tempor eu quis.",
			createdAt: new Date(),
		},
		{
			id: genUUID(),
			content: "Pariatur amet ullamco ut officia excepteur enim sit laborum.",
			createdAt: new Date(),
		},
		{
			id: genUUID(),
			content:
				"Duis sit minim veniam laborum qui aliquip ipsum nulla sit voluptate.",
			createdAt: new Date(),
		},
		{
			id: genUUID(),
			content:
				"Eiusmod id nisi culpa dolore in commodo excepteur quis non non magna laborum.",
			createdAt: new Date(),
		},
		{
			id: genUUID(),
			content: "Cupidatat laboris ea amet reprehenderit esse quis.",
			createdAt: new Date(),
		},
		{
			id: genUUID(),
			content: "Culpa est dolor exercitation Lorem.",
			createdAt: new Date(),
		},
	];
};
