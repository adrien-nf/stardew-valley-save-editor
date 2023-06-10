import { Checkbox, FormControl, Typography } from "@mui/material";
import { Field } from "../../pages/Home/Editor/Fields";
import { useState, useEffect, useContext } from "react";
import { SaveContext } from "../../contexts/SaveContext";
import { Path } from "../../enums/Path";

export const SdvInputBoolean = (props: {
	field: Field
}) => {
	const { get, save, set } = useContext(SaveContext);

	const [value, setValue] = useState<boolean | null>(null);

	useEffect(() => {
		const booleanFromSave = get(Path[props.field.key]) || "false";

		setValue(booleanFromSave === "true");
	}, [save])

	useEffect(() => {
		if (value !== null) {
			set(Path[props.field.key], value ? "true" : "false");
		}
	}, [value])

	const handleChange = (v: boolean) => {
		setValue(v);
	}

	return (
		<FormControl>
			<Typography>{props.field.key}</Typography>
			<Checkbox checked={!!value} onChange={(e) => handleChange(e.target.checked)} />
		</FormControl>
	)
}