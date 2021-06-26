import k from '../kaboom'

export default function getRandomPosition(tileW = 16, tileH = 16) {
	const {
		vec2,
		width,
		height,
		rand
	} = k

	const tx = Math.floor(width() / tileW)
	const ty = Math.floor(height() / tileH)

	const x = (Math.floor(rand(0, tx)) * tileW) + (tileW * 0.5)
	const y = (Math.floor(rand(0, ty)) * tileH) + (tileH * 0.5)

	return vec2(x, y)
}
