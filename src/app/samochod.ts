export class Samochod {
  marka: string;
  model: string;
  rok?: number;
	constructor(_marka:string, _model:string, _rok?:number){
		this.marka=_marka;
		this.model=_model;
		this.rok=_rok;
	}
}
