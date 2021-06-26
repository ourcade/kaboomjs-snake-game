import k from '../kaboom'

import getRandomPosition from '../utils/getRandomPosition'

export default function spawn() {
	const {
		wait,
		add,
		pos,
		rect,
		color,
		origin
	} = k

	return {
		spawn() {
			wait(1, () => {
				add([
					pos(getRandomPosition()),
					rect(16, 16),
					color(0, 0, 1, 1),
					origin('center'),
					'food'
				])
			})
		}
	}
}
