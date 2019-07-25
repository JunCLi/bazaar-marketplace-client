import { createMuiTheme } from '@material-ui/core'
import { orange, amber, red } from '@material-ui/core/colors'

export const lightMuiTheme = createMuiTheme({
	palette: { 
		primary: orange,
		secondary: amber,
		error: red,
	}
})