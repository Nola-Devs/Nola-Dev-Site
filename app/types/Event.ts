export interface Event {
  htmlLink: string;
  summary: string;
  description: string;
  location: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
}
