export interface Task {
  id: String;
  name: String;
  creationDate: Date;
  completionDate: Date;
  assignee: String;
  taskState: String;
  processName: String;
}
