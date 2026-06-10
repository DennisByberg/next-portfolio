'use client';
import EXPERIENCE_DATA from '@/data/experienceData';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';

type TEntry = (typeof EXPERIENCE_DATA)[number];

function TimelineCard({ entry, index }: { entry: TEntry; index: number }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const accent = entry.isActive
    ? '#9c27b0'
    : entry.isEducation
      ? '#ed6c02'
      : '#0288d1';

  const bg = isDark ? '#1a1a1a' : '#ffffff';
  const border = isDark ? '#2a2a2a' : '#f0f0f0';
  const titleColor = isDark ? '#f5f5f5' : '#111111';
  const orgColor = isDark ? '#999' : '#666';
  const badgeBg = isDark ? '#2a2a2a' : '#f5f5f5';
  const badgeColor = isDark ? '#aaa' : '#555';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        backgroundColor: bg,
        borderTop: `1px solid ${border}`,
        borderRight: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: 8,
        padding: '14px 20px',
        marginBottom: 10,
      }}
    >
      <div
        style={{
          backgroundColor: accent,
          borderRadius: '50%',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#fff',
        }}
      >
        {entry.isEducation ? (
          <SchoolIcon sx={{ fontSize: 18 }} />
        ) : (
          <WorkIcon sx={{ fontSize: 18 }} />
        )}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: titleColor, fontWeight: 600, fontSize: '0.95rem' }}>
          {entry.title}
        </div>
        <div style={{ color: orgColor, fontSize: '0.8rem', marginTop: 2 }}>
          {entry.organization}
        </div>
      </div>

      <div
        style={{
          backgroundColor: badgeBg,
          color: badgeColor,
          fontSize: '0.75rem',
          padding: '4px 10px',
          borderRadius: 99,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {entry.dateRange}
      </div>
    </motion.div>
  );
}

function CustomizedTimeline() {
  return (
    <div>
      {EXPERIENCE_DATA.map((entry, index) => (
        <TimelineCard key={entry.id} entry={entry} index={index} />
      ))}
    </div>
  );
}

export default CustomizedTimeline;
