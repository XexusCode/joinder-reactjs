export interface ActiveEventEditableParams {
  editable?: string;
  edit: boolean;
  handleSaveValue: (result: string, id: number) => void;
  id?: number;
  items?: any;
  handleEditDate?: () => void;
}
