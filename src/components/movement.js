import k from '../kaboom'

export default function movement() {
	const {
		vec2,
		dt
	} = k
	const direction = vec2(0, 0)
	const speed = 16
	let accumulatedTime = 0

	return {
		add() {
			this.movement.right()
		},
		update() {
			accumulatedTime += dt()

			if (accumulatedTime < 0.25)
			{
				return
			}

			accumulatedTime = 0

			if (!this.pos)
			{
				console.error('missing pos component')
				return
			}

			this.pos.x += direction.x * speed
			this.pos.y += direction.y * speed

			const child = this.getChild()
			if (!child)
			{
				return
			}

			child.moveUpdate(this.pos.x, this.pos.y)
		},
		movement: {
			left() {
				direction.x = -1
				direction.y = 0
			},
			right() {
				direction.x = 1
				direction.y = 0
			},
			up() {
				direction.x = 0
				direction.y = -1
			},
			down() {
				direction.x = 0
				direction.y = 1
			}
		}
	}
}
