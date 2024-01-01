import { createTheme } from "@mui/material";

export default function useTheme() {
	const theme = createTheme({
		typography: {
			fontFamily: ["var(--global-font)"].join(","),
		},
	});
	return theme;
}
