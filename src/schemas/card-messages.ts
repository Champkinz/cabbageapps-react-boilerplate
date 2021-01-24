export interface iDisplayMessage {
  type: "error" | "success" | "info" | "warning";
  title: string;
  description: string;
}
