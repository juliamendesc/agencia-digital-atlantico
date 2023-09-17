// import * as React from 'react';
// import { styled } from '@mui/system';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// export default function CustomizedAccordions({ defaultContent }) {
//   const [expanded, setExpanded] = React.useState(false);
//   const expandedRef = React.useRef(defaultContent.key);

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   console.log('expanded', expanded);

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === defaultContent.key || expandedRef.current}
//         onChange={handleChange(defaultContent.key)}
//       >
//         <AccordionSummary
//           aria-controls={defaultContent.ariaLabel}
//           id={defaultContent.key}
//         >
//           <Typography>{defaultContent.title}</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>{defaultContent.content}</Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
