export interface CamundaTask {
  id: String;
  name: String;
  taskDefinitionId: String;
  processName: String;
  creationDate: String;
  completionDate: String;
  assignee: String;
  taskState: String;
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
  implementation: String;
}
