import { Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import { Field } from "../../pages/Home/Editor/Fields";
import { useState, useEffect, useContext } from "react";
import { SaveContext } from "../../contexts/SaveContext";
import { Path } from "../../enums/Path";
import { useTranslation } from "react-i18next";

export const SdvInputBoolean = (props: {
	field: Field
}) => {
	const { t } = useTranslation();

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
		<FormControlLabel control={<Checkbox checked={!!value} onChange={(e) => handleChange(e.target.checked)} />} label={t(props.field.key)} />
	)
}