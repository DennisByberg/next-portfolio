'use client';
import { projectsData } from '@/lib/data';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { common, grey } from '@mui/material/colors';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type TProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: TProjectProps) {
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
  );
}

// Material UI Project styles
const PROJECT_SECTION_STYLE: SxProps<Theme> = {
  backgroundColor: grey[200],
  maxWidth: '50rem',
  border: '1px solid #00000033',
  overflow: 'hidden',
  position: 'relative',
  marginBottom: '0.75rem',

  '@media (min-width: 640px)': {
    paddingRight: '2rem',
    height: '20rem',
    marginBottom: '2rem',
  },

  '& > *:last-child': {
    marginBottom: 0,
  },

  '&:hover': {
    backgroundColor: grey[300],
  },
};

const PROJECT_LIST_ITEM_STYLE: SxProps<Theme> = {
  backgroundColor: grey[800],
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: common.white,
  borderRadius: 99,
};

const PROJECT_UL_STYLE: SxProps<Theme> = {
  marginTop: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',

  '@media (min-width: 640px)': {
    marginTop: 'auto',
  },
};

const PROJECT_TITLE_STYLE: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: '1.5rem',

  '@media (max-width: 640px)': {
    mt: 3,
  },
};

const PROJECT_DESCRIPTION_STYLE: SxProps<Theme> = {
  color: grey[600],
  fontStyle: 'italic',
  lineHeight: 1.625,
  marginTop: '0.5rem',
};
