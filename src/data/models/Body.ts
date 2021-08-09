import { Seats } from "./Parliament";
import Nameable from "./util/Nameable";

interface Body extends Nameable {
  seats: Seats,
}

export default Body;
