import { styled } from "@/generated/styled-system/jsx";

export const Over = styled('div', {
	base: {
		'& > *': {
			gridArea: '1/1',
		},
		display: 'grid',
		height: '100%',
	},
})
