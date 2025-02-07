import List from '@shared/ui/list'

<<<<<<<< HEAD:src/features/tutorials/list-tutorial.ts
import { withTutorial } from '../../shared/tutorial/lib/with-tutorial'
========
import { withTutorial } from '../lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/list-tutorial.ts

export const ListTutorial = withTutorial(List)
