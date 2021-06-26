import k from '../kaboom'

export default function GameOver() {
	const {
		add,
		pos,
		text,
		color,
		origin,
		width,
		height,
		keyPress,
		go
	} = k

	add([
		pos(width() * 0.5, height() * 0.5),
		text('Game Over', 24),
		color(1, 0, 0, 1),
		origin('center')
	])

	keyPress('enter', () => {
		go('snake')
	})
}
