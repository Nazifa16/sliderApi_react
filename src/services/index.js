import axios from "axios";

const url =
  "https://api.unsplash.com/photos?per_page=15&client_id=KSMpObLAVnBDfRo-HcbTxWznzPr_IlKfJhOAJ1bKZq0";
export const getPictures = async () => {
  try {
    const res = await axios({
      method: "GET",
      url,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
