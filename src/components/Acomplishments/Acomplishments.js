import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { ExternalLinks } from '../Projects/ProjectsStyles';

const data = [
  { number: "6+", text: 'Projects', elink: "https://github.com/avsk80/"},
  { number: 1, text: 'Research Papers', elink: "https://www.jardcs.org/abstract.php?id=606"}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <a href={`${card.elink}`} target="_blank"><BoxText>{card.text}</BoxText></a>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);
export default Acomplishments;
