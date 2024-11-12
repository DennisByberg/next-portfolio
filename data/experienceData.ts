import { TExperienceItem } from '@/types/globalTypes';
import { v4 as uuidv4 } from 'uuid';

const EXPERIENCE_DATA: readonly TExperienceItem[] = [
  {
    id: uuidv4(),
    title: 'Bartender',
    organization: 'Hills Golf & Sports Club',
    isActive: true,
    isEducation: false,
    startYear: 2023,
    endYear: null,
  },
  {
    id: uuidv4(),
    title: 'System Developer',
    organization: 'LIA at Volvo Cars',
    isActive: false,
    isEducation: false,
    startYear: 2023,
    endYear: 2024,
  },
  {
    id: uuidv4(),
    title: 'Frontend Dev',
    organization: 'Jensen Yrkeshögskola',
    isActive: false,
    isEducation: true,
    startYear: 2022,
    endYear: 2024,
  },
  {
    id: uuidv4(),
    title: 'Bartender',
    organization: 'Star Bowling',
    isActive: false,
    isEducation: false,
    startYear: 2022,
    endYear: 2022,
  },
  {
    id: uuidv4(),
    title: '.NET Dev',
    organization: 'Campus Mölndal',
    isActive: false,
    isEducation: true,
    startYear: 2021,
    endYear: 2022,
  },
  {
    id: uuidv4(),
    title: 'Delivery Driver',
    organization: 'UPS Sverige',
    isActive: false,
    isEducation: false,
    startYear: 2019,
    endYear: 2021,
  },
  {
    id: uuidv4(),
    title: 'Bartender',
    organization: 'Hard Rock Café',
    isActive: false,
    isEducation: false,
    startYear: 2017,
    endYear: 2019,
  },
  {
    id: uuidv4(),
    title: 'Restaurant Manager',
    organization: 'Bistro Hemma Hos',
    isActive: false,
    isEducation: false,
    startYear: 2015,
    endYear: 2017,
  },
] as const;

export default EXPERIENCE_DATA;
