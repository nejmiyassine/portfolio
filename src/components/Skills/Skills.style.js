import styled from 'styled-components';
import { fontMedium, fontSize, tinyFontSize } from '../../styles/font/font';

export const SkillsSection = styled.section`
  padding: 1.5rem 0;
`;

export const SkillsContainer = styled.div`
  row-gap: 2rem;
  padding-top: 1rem;
`;

export const SkillsContent = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 1.5rem;
  border-radius: 1.25rem;
`;

export const SkillsTitle = styled.h3`
  font-size: ${fontSize};
  font-weight: ${fontMedium};
  color: ${({ theme }) => theme.firstColor};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
`;

export const SkillsGroup = styled.div`
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;
`;

export const SkillsData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  & svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.firstColor};
  }
`;

export const SkillsName = styled.h3`
  font-size: ${fontSize};
  font-weight: ${fontMedium};
  line-height: 18px;
`;

export const SkillsLevel = styled.span`
  font-size: ${tinyFontSize};
`;
