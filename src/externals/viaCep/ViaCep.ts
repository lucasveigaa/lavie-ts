import axios, { AxiosInstance } from "axios";
import { GeoApiInterface } from "./GeoApiInterface";

class ViaCep implements GeoApiInterface {
    endpoint: string = "https://viacep.com.br/"
    private api: AxiosInstance

    constructor(){
        // No back-end não é possivel utilizar o fetch para consumir uma API, iremos utilizar uma nova biblioteca que é o Axios.
        this.api = axios.create({
            baseURL: this.endpoint
        })
    }

    getAddres(bodyValue: string) {
        this.api.get("ws/"+ bodyValue+ "/json/")

    }
}