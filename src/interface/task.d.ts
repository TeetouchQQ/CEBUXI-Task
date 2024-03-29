import { IComment } from './comment';

export interface ITask {
  index_number: number;

  _id: Key | null | undefined;
  title: string;
  description: string;
  author: IAuthor;
  level: number;
  tags: string[] | null;
  hint: string;
  files?: IFiles[] | null;
  testcases?: ITestCases[] | null;
  draft?: boolean;
  status: string;
  solution_code: string;
  status: string;
  created_at: string | null;
  updated_at: string | null;
  draft: boolean | null;
  __v: number;
}

export interface ITaskByID {
  [x: string]: any;
  _id: string;
  title: string;
  description: string;
  author: {
    id: string;
    username: string;
    _id: string;
  };
  level: number;
  tags: string[];
  hint: string;
  files: IFiles[];
  testcases: {
    input: string;
    output: string;
    published: boolean;
  }[];
  draft: boolean;
  status: string;
  solution_code: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  comments: IComment[];
}

export interface IFiles {
  url: string;
  key: string;
  originalName?: string;
}
export interface ITestCases {
  input: string;
  output: string;
  published: boolean;
}

export interface IAuthor {
  username: string;
  id: string;
}

export interface IData {
  status: string;
  draft: boolean;
}
export { IComment };
