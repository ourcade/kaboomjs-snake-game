import k from './kaboom'

import Snake from './scenes/Snake'
import GameOver from './scenes/GameOver'

k.scene('snake', Snake)
k.scene('game-over', GameOver)

k.start('snake')
