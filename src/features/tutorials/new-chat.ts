<<<<<<<< HEAD:src/features/tutorials/new-chat.ts
import { AddNewChat } from '@features/add-new-chat'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
========
import { withTutorial } from 'widgets/tutorial/lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/new-chat.ts

import { AddNewChat } from '@features/add-new-chat'

export const AddNewChatTutorial = withTutorial(AddNewChat)
