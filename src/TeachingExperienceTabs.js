import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TeachingExperienceTabs() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography><strong>Yew Chung International School of Shanghai</strong> (2017 - Present) </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Shanghai, People’s Republic of China
          <p>Taught IB Biology at a Higher and Standard Level, IGCSE Chemistry and Year 7 and 9 Science to both students for whom English was their first language or an additional language. Developed Project Based Learning opportunities with the Science department. Co-ordinated the Co-Curricular Activities programme and was active in clubs, trips and committees.</p>
    <ul>
      <li>Guided IB students through Extended Essays, Independent Investigations, coursework and exams through in-person, online and hybrid classroom environments. Prepared IGCSE students for Chemistry exams within the Cambridge International Education (CIE) Co-ordinated Sciences programme through extensive practical and inquiry-based lessons.</li>
      <li>Developed several rigorous Project Based Learning (PBL) units independently and in collaboration with teachers of Science and other subject areas. Upskilled colleagues to use soldering irons and other equipment. Areas of investigation include microbiology, energy resources, electronics and food & beverages.</li>
      <li>Planned a space theme event in which students in Years 5, 6 and 9 participated in fun experiments alongside cosmonauts in the Tiangong Space Station. This involved organising the experiments, teaching colleagues in the Science department, Primary teachers and Year 12 Students how to perform a series of experiments safely.</li>
      <li>Organised the Co-Curricular Activities (CCA) program. Scheduling the clubs and activities throughout the school year and collated attendance data. Designing a handbook every Semester using Adobe InDesign to share with current and prospective students and parents. Led and organised assemblies to outline procedures for registration and promote CCAs. </li>
      <li>Recruited external vendors to run CCAs. Handled payments and collected documentation to ensure compliance with school and governmental child protection and insurance policies in collaboration with school Child Protection Officers, Vice-Principals and the School Business Manager. Supervised their sessions to ensure quality teaching, assist with behaviour management and offer ongoing support as a friendly point-of-contact for any concerns or issues.</li>
      <li>Coached Floor Hockey and Volleyball teams in Shanghai-based competitions; collaborated with teachers and lead the campus Yearbook Committee to publish an annual whole-school Yearbook for students, parents and staff to celebrate successes across the school each academic year and established a FUSE Cup eSports team within the school which competed in international competitions. </li>
      <li>Led week-long camps across China as part of the Education Outside of the Classroom program and Duke of Edinburgh International Award Adventurous Journeys as an Award Leader and Assessor. Became an International Award Co-ordinator and planned and organised trips around Shanghai. </li>
      <li>Photographed whole-school events, lessons around the school and sporting events for publication within the Yearbook, on the school WeChat blog and in marketing material.</li>
      <li>Lead and organised Yellow House from 2017-2019 in an intra-school competition which included musical performances, sports events and subject-based competitions.</li>
      <li>Administered school Kognity account on behalf of the school managing student enrolment, billing and technical support for staff.</li>
    </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><strong>Malvern College Qingdao</strong> (2015 - 2017)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Qingdao, Shandong, People’s Republic of China
            <p>Taught IGCSE and A-Level Biology to predominantly students with English as an additional language. Provided pastoral care to the Upper Fifth (Year 11) students as a Head of Year and developed a Personal, Social & Health Education (PSHE) curriculum.</p>
        <ul>
            <li>Differentiated instruction for classes consisting of students with English as an Additional Language (EAL).</li>
            <li>Planned and delivered lessons within EdExcel curricula for IGCSE and A Level in Biology and led educational excursions.</li>
            <li>Developed a Personal, Social & Health Education (PSHE) curriculum for Upper 5th students and led a team of five form teachers to provide pastoral care to one hundred students.</li>
            <li>Created a rewards system, administered the schools discipline policy, produced subject choice options, conducted parent meetings and presented weekly year-level assemblies for Upper 5th students.</li>
            <li>Encouraged enthusiasm and passion for sports as U15 & U19 girls football coach in the Qingdao International Schools Network tournaments and in the 2017 Association of Chinese and Mongolian International Schools (ACAMIS) football tournament.</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> <strong>De Stafford School</strong> (2014 - 2015)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Caterham, Surrey, United Kingdom
          <p>Taught Lower Secondary Science, GCSE Science and BTEC Science to British students from a variety of socio-economic backgrounds. Served as a Head of House to encourage and a sense of school community through fundraisers, competitive sports, and activities.</p>
            <ul>
                <li>Utilised an array of pedagogical practices in laboratory-based and multimedia enriched lessons.</li>
                <li>Coordinated and oversaw inter-house competitions as the Head of George House.</li>
                <li>Produced engaging scientific practical activities on a weekly basis as Science Club Coordinator.</li>
                <li>Planned and delivered lessons within AQA and EdExcel curricula for GCSE</li>
                <li>Provided pastoral care for students as a Social and Academic Mentor.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
