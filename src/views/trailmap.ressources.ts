import axios from "axios";

export default {
  authentWithStrava() {
    axios.get('https://www.strava.com/oauth/authorize');
  }
}