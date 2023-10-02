import request from "supertest";
import {app} from "../src/app";
import { faker } from '@faker-js/faker';

require("dotenv").config();

describe("GET /api/products", () => {
    it("should return all products", async () => {
      const res = await request(app).post("/exercise").send({
        name: faker.person.fullName()
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id');
      expect(res.body.id).toBeDefined();
      console.log(res.body)
    });
  });