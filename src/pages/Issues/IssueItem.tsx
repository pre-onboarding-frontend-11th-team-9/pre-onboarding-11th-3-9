import { styled } from 'styled-components';

import { Issue } from '@/types';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { Title } from '@/components';

type IssueItemProps = {
  issue: Issue;
};

const IssueItem = ({ issue: { number, title, created_at, user, comments } }: IssueItemProps) => {
  return (
    <SIssueItem>
      <SLink to={`${PATH.ISSUES}/${number}`}>
        <SInfoContainer>
          <span>#{number}</span>
          <Title order={4} display="inline" p="0 10px">
            {title}
          </Title>
          <SCreateInfo>
            <span>작성자: {user.login}</span>
            <span>작성일: {new Date(created_at).toLocaleString('ko-KR')}</span>
          </SCreateInfo>
        </SInfoContainer>
        <SComment>코멘트: {comments}</SComment>
      </SLink>
    </SIssueItem>
  );
};

const SIssueItem = styled.li`
  list-style: none;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[3]};

  &:hover {
    background-color: ${props => props.theme.colors.gray[2]};
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SInfoContainer = styled.div`
  line-height: 1.5;
`;

const SCreateInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const SComment = styled.div`
  flex-shrink: 0;
`;

export default IssueItem;