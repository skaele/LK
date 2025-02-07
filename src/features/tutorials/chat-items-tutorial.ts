import { ChatItems } from '@features/chat/ui/molecules'

<<<<<<<< HEAD:src/features/tutorials/chat-items-tutorial.ts
import { withTutorial } from '../../shared/tutorial/lib/with-tutorial'
========
import { withTutorial } from '../lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/chat-items-tutorial.ts

export const ChatItemsTutorial = withTutorial(ChatItems)
