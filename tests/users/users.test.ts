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

    it("GET /api/v1/users", async () => {

        const res = await client.get("/api/v1/users")
        expect(res.statusCode).toBe(200)
        expect(res.body[0].name).toBe("mhp")
        // console.log(res.body)
    })
})
