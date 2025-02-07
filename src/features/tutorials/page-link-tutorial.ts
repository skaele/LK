import { PageLink } from '@features/all-pages'

<<<<<<<< HEAD:src/features/tutorials/page-link-tutorial.ts
import { withTutorial } from '../../shared/tutorial/lib/with-tutorial'
========
import { withTutorial } from '../lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/page-link-tutorial.ts

export const PageLinkTutorial = withTutorial(PageLink)
