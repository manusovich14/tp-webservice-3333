export class Moneda {
  from_type: string;
  from_value: string;
  to_type: string;

  Moneda(from_type?: string, from_value?: string, to_type?: string, result?: number) {
    this.from_type = from_type;
    this.from_value = from_value;
    this.to_type = to_type;
  }
}
