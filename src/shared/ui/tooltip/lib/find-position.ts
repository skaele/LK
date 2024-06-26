import { Direction } from '../types'

export function findPosition(direction: Direction) {
    switch (direction) {
        case 'up':
            return 'translate(0, -30px)'
        case 'down':
            return 'translate(0, 30px)'
        case 'left':
            return 'translate(-30px, 0)'
        case 'right':
            return 'translate(135px, 0)'
    }
}
