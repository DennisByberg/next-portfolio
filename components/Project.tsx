import PROJECTS_DATA from '@/data/projectsData';
import {
  PROJECT_DESCRIPTION_STYLE,
  PROJECT_LIST_ITEM_STYLE,
  PROJECT_SECTION_STYLE,
  PROJECT_TITLE_STYLE,
  PROJECT_UL_STYLE,
} from '@/styles/projectSX';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type TProjectProps = (typeof PROJECTS_DATA)[number];

function Project({ title, description, tags, imageUrl, githubURL }: TProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Box
      component={motion.div}
      className={'group mb-3 sm:mb-8 last:mb-0'} // Tailwind
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Box
        component={'a'}
        href={githubURL}
        target={'_blank'}
        rel={'noopener noreferrer'}
        style={{ textDecoration: 'none' }}
      >
        <Box component={'section'} sx={PROJECT_SECTION_STYLE}>
          <Box
            component={'div'}
            className={
              'pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'
            } // Tailwind
          >
            <Typography variant={'h3'} sx={PROJECT_TITLE_STYLE}>
              {title}
            </Typography>
            <Typography paragraph={true} sx={PROJECT_DESCRIPTION_STYLE}>
              {description}
            </Typography>
            <Box component={'ul'} sx={PROJECT_UL_STYLE}>
              {tags.map((tag, index) => (
                <Box component={'li'} sx={PROJECT_LIST_ITEM_STYLE} key={index}>
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>

          <Image
            src={imageUrl}
            alt={'Project I worked on'}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
            // Tailwind
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
