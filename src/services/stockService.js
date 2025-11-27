import axios from 'axios';

const order = [];

class StockService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://sheetdb.io/api/v1/jjaha8pp1o6rf' // example adress
        });
    }

    async fetchData(sheetName) { // lädt die Daten aus dem API-Sheet
        try {
            const response = await this.apiClient.get(`?sheet=${sheetName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    async getRevenue(sheetName) {
        const data = await this.fetchData(sheetName);

        order.length = 0; // leeren
        order.push(...Object.values(data[5]));
        return order;

        //return order.map(key => data[3][key]);
    }


}

export const stockService = new StockService();