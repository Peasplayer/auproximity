export interface BackendModel {
  gameCode: string;
  backendType: BackendType;
}
export interface PublicLobbyBackendModel extends BackendModel {
  backendType: BackendType.PublicLobby;
  region: PublicLobbyRegion;
}
export interface ImpostorBackendModel extends BackendModel {
  backendType: BackendType.Impostor;
  ip: string;
}
export interface BepInExBackendModel extends BackendModel {
  backendType: BackendType.BepInEx;
  token: string;
}
export enum BackendType {
  NoOp,
  PublicLobby,
  Impostor,
  BepInEx,
  Peasplayer
}
export enum PublicLobbyRegion {
  NorthAmerica,
  Europe,
  Asia
}
export interface GameSettings {
  crewmateVision: number;
}

// Room groups
export enum RoomGroup {
  Main,
  Spectator,
  Muted
}
