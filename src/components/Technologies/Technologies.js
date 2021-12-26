import React from 'react';
import { DiCode, DiFirebase, DiGitBranch, DiGoogleAnalytics, DiPython, DiReact, DiSpark, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skill Set</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the data world to procure and extract insights from it.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiSpark size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>BigData Stack</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Sqoop, Hive, Spark-Core, SQL, Stream
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, MS SQL <br />
            GCP-BigQuery, Cassandra
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWebplatform size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web</ListTitle>
          <ListParagraph>
            Node.js, Flask <br />
            HTML5, CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Python, Java <br />
            Shell-scripting
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGoogleAnalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI related courses</ListTitle>
          <ListParagraph>
            Linear Algebra, Calculus <br />
            Stats and Probability, ML, DL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGitBranch size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>General</ListTitle>
          <ListParagraph>
            Problem solving, DevOps<br />
            Business communication
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
