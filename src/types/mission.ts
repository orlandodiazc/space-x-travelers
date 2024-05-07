export interface Mission {
  mission_name: string;
  isReserved?: boolean;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}
