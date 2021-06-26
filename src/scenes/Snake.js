import k from '../kaboom'

import movement from '../components/movement'
import controls from '../components/controls'
import spawn from '../components/spawn'
import link from '../components/link'
import getRandomPosition from '../utils/getRandomPosition'

export default function Snake() {
	const {
		add,
		pos,
		rect,
		color,
		origin,
		overlaps,
		destroy,
		camShake,
		go,
		text
	} = k

	let score = 0
	const spawner = add([
		spawn()
	])

	const scoreText = add([
		pos(2, 2),
		text(`Score: ${score}`),
		color(1, 1, 1, 1)		
	])

	let end = add([
		pos(getRandomPosition()),
		rect(16, 16),
		color(0, 1, 0, 1),
		origin('center'),
		movement(),
		controls(),
		link(),
		'head'
	])

	spawner.spawn()

	overlaps('head', 'food', (head, food) => {
		destroy(food)

		camShake(3)

		score = score + 1
		scoreText.text = `Score: ${score}`

		const newChild = add([
			pos(end.pos.x, end.pos.y),
			rect(16, 16),
			color(0, 1, 0, 1),
			origin('center'),
			link(),
			'body'
		])

		end.setChild(newChild)

		end = newChild

		spawner.spawn()
	})

	overlaps('head', 'body', (head, body) => {
		if (body.isNew())
		{
			return
		}

		go('game-over')
	})
}
