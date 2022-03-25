import { Studies } from '../types/Studies';

export const studiesMock: Studies[] = [
  {
    id: '1',
    title: 'Item Mock 1',
    time: '01:30:00',
    isCurrentStudy: true,
    isConcluded: false
  },
  {
    id: '2',
    title: 'Item Mock 2',
    time: '01:25:00',
    isCurrentStudy: false,
    isConcluded: false
  },
  {
    id: '3',
    title: 'Item Mock 3',
    time: '00:46:00',
    isCurrentStudy: false,
    isConcluded: true
  }
];
