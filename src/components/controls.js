import k from '../kaboom'

export default function controls() {
	const {
		keyPress
	} = k

	return {
		add() {
			keyPress('left', () => {
				if (!this.movement)
				{
					console.error('missing movement component')
					return
				}

				this.movement.left()
			})

			keyPress('right', () => {
				this.movement.right()
			})

			keyPress('up', () => {
				this.movement.up()
			})

			keyPress('down', () => {
				this.movement.down()
			})
		}
	}
}
