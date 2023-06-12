import { TextField } from "@mui/material";
import { Field } from "../../pages/Home/Editor/Fields";
import { useState, useEffect, useContext } from "react";
import { SaveContext } from "../../contexts/SaveContext";
import { Path } from "../../enums/Path";
import { useTranslation } from "react-i18next";

export const SdvInputNumber = (props: {
	field: Field
}) => {
	const { t } = useTranslation();

	const { get, save, set } = useContext(SaveContext);

	const [value, setValue] = useState("");

	useEffect(() => {
		setValue(get(Path[props.field.key]) || "")
	}, [save])

	useEffect(() => {
		if (value !== "")
			set(Path[props.field.key], value);
	}, [value])

	return (
		<TextField
			label={t(props.field.key)}
			type={props.field.type === "boolean" ? "text" : props.field.type}
			variant="outlined"
			size="small"
			InputLabelProps={{
				shrink: true,
			}}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			style={{
				flexGrow: 1
			}}
		/>)
}