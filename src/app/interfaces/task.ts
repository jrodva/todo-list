import { Status } from '../enums/status';

export interface Task {
  id: string
  name: string
  status: Status
}
