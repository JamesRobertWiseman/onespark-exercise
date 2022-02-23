export interface HeaderProps {
  headerPhrase?: string;
}

export interface Inputs {
  name: string
  type: string
  placeholder: string
  columnSpan: number
}

export interface RowProps {
  index: number
  inputs: Inputs[]
  remove: (index: number) => void
}

export interface InputProps {
  type: string
  name: string
  placeholder: string
  index: number
}