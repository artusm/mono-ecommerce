import React from 'react';

import ReactMarkdown from 'react-markdown';

export interface Props {
  content: string;
}

export const Content: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <div className="mt-4">
      <ReactMarkdown className="whitespace-pre-wrap">{content}</ReactMarkdown>
    </div>
  );
};
