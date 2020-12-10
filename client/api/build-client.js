import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    return axios.create({
      baseURL:
        // "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local", // Dev
        "http://www.ticketing-app-prod.xyz/", // Prod
      headers: req.headers,
    });
  } else {
    // We are on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
