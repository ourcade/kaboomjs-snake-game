import k from '../kaboom'

export default function link() {
	const {
		vec2
	} = k
	let child
	let isNew = true
	const nextPosition = vec2(0, 0)

	return {
		add() {
			nextPosition.x = this.pos.x
			nextPosition.y = this.pos.y
		},
		getChild() {
			return child
		},
		setChild(c) {
			child = c
		},
		moveUpdate(x, y) {
			const pos = nextPosition.clone()

			nextPosition.x = x
			nextPosition.y = y

			this.pos.x = pos.x
			this.pos.y = pos.y

			isNew = false

			if (!child)
			{
				return
			}

			child.moveUpdate(pos.x, pos.y)
		},
		isNew() {
			return isNew
		}
	}
}
