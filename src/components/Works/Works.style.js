import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

export const WorkSection = styled.section``;

export const WorkContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  justify-content: center;
  row-gap: 3rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, max-content);
    column-gap: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 3rem;
  }
`;
