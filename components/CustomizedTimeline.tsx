import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import EXPERIENCE_DATA from '@/data/experienceData';
import formatDateRange from '@/utils/formatDateRange';
import formatString from '@/utils/formatString';
import SchoolIcon from '@mui/icons-material/School';

function CustomizedTimeline() {
  return (
    <Timeline position={'left'}>
      {EXPERIENCE_DATA.map((entry) => (
        <TimelineItem key={entry.id}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            {formatDateRange(entry.startYear, entry.endYear, entry.isActive)}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color={
                entry.isActive ? 'secondary' : entry.isEducation ? 'warning' : 'info'
              }
            >
              {entry.isEducation ? <SchoolIcon /> : <WorkIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography
              fontSize={formatString(entry.title)}
              variant="h6"
              component="span"
            >
              {entry.title}
            </Typography>
            <Typography sx={{ fontStyle: 'italic', opacity: 0.4 }}>
              {entry.organization}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default CustomizedTimeline;
