import { Field } from "../../pages/Home/Editor/Fields";
import { SdvInputText } from "./SdvInputText";
import { SdvInputNumber } from "./SdvInputNumber";
import { SdvInputBoolean } from "./SdvInputBoolean";

export const SdvInput = (props: {
	field: Field
}) => {
	switch (props.field.type) {
		case "text": return <SdvInputText field={props.field} />
		case "number": return <SdvInputNumber field={props.field} />
		case "boolean": return <SdvInputBoolean field={props.field} />
	}
}