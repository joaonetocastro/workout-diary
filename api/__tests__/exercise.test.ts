import request from "supertest";
import {app} from "../src/app";
import { faker } from '@faker-js/faker';

require("dotenv").config();

async function makeExercise() {
  const res = await request(app).post("/exercise").send({
    name: faker.person.fullName()
  });
  return {id: res.body._id}
}

describe("GET /api/products", () => {
  it.only("should list exercises", async () => {
    const res = await request(app).get("/exercise").send();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should create exercise", async () => {
    const res = await request(app).post("/exercise").send({
      name: faker.person.fullName()
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body._id).toBeDefined();
  });

    it('should retrieve exercise', async () => {
      const {id} = await makeExercise()
      const res = await request(app).get(`/exercise/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name');
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toBeDefined();
    })

    it('should update exercise', async () => {
      const {id} = await makeExercise()
      const name = faker.person.fullName()
      await request(app).put(`/exercise/${id}`).send({
        name
      });
      const res = await request(app).get(`/exercise/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name');
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toBeDefined();
      expect(res.body.name).toEqual(name);
    })

    it('should update exercise', async () => {
      const {id} = await makeExercise()
      const name = faker.person.fullName()
      await request(app).put(`/exercise/${id}`).send({
        name
      });
      const res = await request(app).get(`/exercise/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name');
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toBeDefined();
      expect(res.body.name).toEqual(name);
    })
    
    it('should delete exercise', async () => {
      const {id} = await makeExercise()
      await request(app).delete(`/exercise/${id}`).send();
      const res = await request(app).get(`/exercise/${id}`).send().expect(404);
      expect(res.statusCode).toBe(404);
    })
  });