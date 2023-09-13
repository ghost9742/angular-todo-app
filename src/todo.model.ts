export class Todo {
  public description: string;
  public urgent: boolean;
  public id!: number;

  constructor(
    description: string,
    urgent: boolean,
    id: number = Math.floor(Math.random() * 100)
  ) {
    this.description = description;
    this.urgent = urgent;
    this.id = id;
  }
}
