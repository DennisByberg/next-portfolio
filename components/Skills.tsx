'use client';
import {
  SKILLS_BACKEND_DATA,
  SKILLS_DESIGN_TOOLS_DATA,
  SKILLS_FRONTEND_DATA,
  SKILLS_METHODOLOGIES_DATA,
  SKILLS_TESTING_DATA,
  SKILLS_VERSION_CONTROL_DATA,
} from '@/data/skillsData';
import useSectionInView from '@/hooks/useSectionInView';
import { SKILLS_SECTION_STYLE } from '@/styles/skillsSX';
import { Box } from '@mui/material';
import SectionHeading from './SectionHeading';
import SkillSubjectSection from './SkillSubjectSection';

function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <Box component={'section'} sx={SKILLS_SECTION_STYLE} id={'skills'} ref={ref}>
      <SectionHeading>My skills</SectionHeading>
      <SkillSubjectSection title={'Frontend'} skillData={SKILLS_FRONTEND_DATA} />
      <SkillSubjectSection title={'Backend'} skillData={SKILLS_BACKEND_DATA} />
      <SkillSubjectSection title={'Testing'} skillData={SKILLS_TESTING_DATA} />
      <SkillSubjectSection
        title={'Version Control'}
        skillData={SKILLS_VERSION_CONTROL_DATA}
      />
      <SkillSubjectSection
        title={'Methodologies'}
        skillData={SKILLS_METHODOLOGIES_DATA}
      />
      <SkillSubjectSection title={'Design Tools'} skillData={SKILLS_DESIGN_TOOLS_DATA} />
    </Box>
  );
}

export default Skills;
