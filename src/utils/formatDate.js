import { formatDistanceToNow } from "date-fns";

export function formatDateToRelative(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
