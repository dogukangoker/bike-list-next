export interface IBikeListProps {
  bike_id: string;
  lat: number;
  lon: number;
  is_reserved: boolean;
  is_disabled: number | boolean;
  vehicle_type: string;
  total_bookings: number;
  android: string;
  ios: string;
}

export interface ResponseType {
  last_updated: number | null;
  ttl: number;
  data: ResponseData;
  total_count: number | null;
  nextPage: boolean;
}

export interface ResponseData {
  bikes: Array<IBikeListProps>;
}

export interface IBikeListQuery {
  page: number;
  bike_id: string;
  vehicle_type: string;
}
