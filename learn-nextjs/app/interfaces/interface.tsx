export interface IPhase {
  bomId: string;
  value: string;
}

export interface IAvailableSystems {
  systemSize: number;
  phases: IPhase[];
}
