import * as React from 'react';
import { styled } from '@mui/system';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid rgba(0, 0, 0, .125)`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: 'large' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    '& > *': {
      fontSize: '3rem',
      '@media (max-width: 1400px)': {
        fontSize: '2.5rem', // Reduced font size for smaller viewport
      },
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  '& > *': {
    fontSize: '2.5rem',
  },
}));

export default function CustomizedAccordions({
  defaultContent,
  expanded,
  onChange,
}) {
  return (
    <div>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          aria-controls={defaultContent.ariaLabel}
          id={defaultContent.key}
        >
          {defaultContent.title}
        </AccordionSummary>
        <AccordionDetails>{defaultContent.content}</AccordionDetails>
      </Accordion>
    </div>
  );
}
