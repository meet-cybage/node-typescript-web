import supertest  from "supertest"
import app from "../../main/app"
import { logger } from "../../main/logging"

const client = supertest(app)


describe("GET /", () => {

    beforeAll(() => {
        logger.silent = true;
    })
    afterAll(() => {
        logger.silent = false;
    })

    it("GET /api/v1/city/<cityName>", async () => {

        const res = await client.get("/api/v1/city/Ahmedabad")
        expect(res.statusCode).toBe(200)
        expect(res.body.cityName).toBe("Ahmedabad")
    })

    it("POST /api/v1/city/", async () => {

        const res = await client.post("/api/v1/city").send({"cityName": "Ahmedabad"})
        expect(res.statusCode).toBe(201)
        expect(res.body.cityName).toBe("Ahmedabad")
    })
})
