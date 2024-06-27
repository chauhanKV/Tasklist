export interface CamundaTask {
  id: String;
  name: String;
  taskDefinitionId: String;
  processName: String;
  creationDate: Date;
  completionDate: Date;
  assignee: String;
  taskState: String;
  sortValues: [String];
  isFirst: true;
  formKey: String;
  formId: String;
  formVersion: String;
  isFormEmbedded: String;
  processDefinitionKey: String;
  processInstanceKey: String;
  tenantId: String;
  dueDate: String;
  followUpDate: String;
  candidateGroups: String;
  candidateUsers: String;
  variables: [String];
  context: String;
  implementation: String;
}
