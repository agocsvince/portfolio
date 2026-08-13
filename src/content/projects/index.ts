import type { ProjectId, ProjectEntry } from './types';
import * as uuid1 from './uuid-1';
import * as uuid21 from './kain/uuid-21';
import * as uuid22 from './uuid-22';
import * as uuid27 from './uuid-27';
import * as uuid231 from './kain/uuid-231';
import * as uuid232 from './kain/uuid-232';
import * as uuid233 from './kain/uuid-233';
import * as uuid234 from './kain/uuid-234';
import * as uuid242 from './kain/uuid-242';
import * as uuid243 from './kain/uuid-243';
import * as uuid31 from './uuid-31';
import * as uuid32 from './tomato-garden/uuid-32';
import * as uuid33 from './chinatown/uuid-33';
import * as uuid41 from './uuid-41';
import * as uuid43 from './uuid-43';
import * as uuid45 from './uuid-45';
import * as uuid46 from './uuid-46';
import * as uuid48 from './uuid-48';
import * as uuid49 from './uuid-49';
import * as uuid51 from './uuid-51';
import * as uuid241 from './kain/uuid-241';
import * as uuid244 from './kain/uuid-244';
import * as uuid245 from './kain/uuid-245';
import * as uuid281 from './lp/uuid-281';
import * as uuid282 from './lp/uuid-282';

export const projectData: Record<ProjectId, ProjectEntry> = {
  [uuid1.id]: { content: uuid1.content },
  [uuid21.id]: { content: uuid21.content },
  [uuid22.id]: { content: uuid22.content },
  [uuid27.id]: { content: uuid27.content },
  [uuid231.id]: { content: uuid231.content },
  [uuid232.id]: { content: uuid232.content },
  [uuid233.id]: { content: uuid233.content },
  [uuid234.id]: { content: uuid234.content },
  [uuid31.id]: { content: uuid31.content },
  [uuid32.id]: { content: uuid32.content },
  [uuid33.id]: { content: uuid33.content },
  [uuid41.id]: { content: uuid41.content },
  [uuid43.id]: { content: uuid43.content },
  [uuid45.id]: { content: uuid45.content },
  [uuid46.id]: { content: uuid46.content },
  [uuid48.id]: { content: uuid48.content },
  [uuid49.id]: { content: uuid49.content },
  [uuid51.id]: { content: uuid51.content },
  [uuid241.id]: { content: uuid241.content },
  [uuid242.id]: { content: uuid242.content },
  [uuid243.id]: { content: uuid243.content },
  [uuid244.id]: { content: uuid244.content },
  [uuid245.id]: { content: uuid245.content },
  [uuid281.id]: { content: uuid281.content },
  [uuid282.id]: { content: uuid282.content },
};

export { defaultData } from './tree';
export type { ProjectId, ProjectEntry, ProjectTreeData } from './types';
