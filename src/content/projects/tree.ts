import type { ProjectTreeData } from '@/content/projects/types';

export const defaultData: ProjectTreeData = {
  title: 'projects',
  id: 'uuid-0',
  children: [
    {
      title: 'README.md',
      id: 'uuid-1',
    },
    {
      title: 'video',
      id: 'uuid-2',
      children: [
        { title: 'kain_aftermovie.mp4', id: 'uuid-21' },
        { title: 'gyuris_x_szalai_szin.mov', id: 'uuid-22' },
        {
          title: 'kain_2310_EP',
          id: 'uuid-23',
          children: [
            { title: 'buda.mov', id: 'uuid-231' },
            { title: 'mostanaban.mov', id: 'uuid-232' },
            { title: 'oszinten.mov', id: 'uuid-233' },
            { title: 'csalad.mov', id: 'uuid-234' },
          ],
        },
        { title: 'susa_2elore_1hatra.mp4', id: 'uuid-27' },
      ],
    },
    {
      title: 'photo',
      id: 'uuid-3',
      children: [{ title: 'all.jpg', id: 'uuid-31' }],
    },
    {
      title: 'website',
      id: 'uuid-4',
      children: [
        { title: 'benifilm.com', id: 'uuid-46' },
        { title: 'levendulapiknik.com', id: 'uuid-41' },
        { title: 'gyuben.com', id: 'uuid-49' },
        { title: 'mindenamifavagas.hu', id: 'uuid-48' },
        { title: 'hazepitesek.hu', id: 'uuid-43' },
        { title: 'pressfitness.hu', id: 'uuid-45' },
      ],
    },
    {
      title: 'archive',
      id: 'uuid-5',
      children: [{ title: 'portfolio-1.0', id: 'uuid-51' }],
    },
  ],
};
