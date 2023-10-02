import request from "supertest";
import {app} from "../src/app";
import { faker, fakerSK } from '@faker-js/faker';

require("dotenv").config();

async function makeProgram() {
  const res = await request(app).post("/program").send({
    name: faker.person.fullName(),
    exercises: [
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
    ],
    days: ['wed', 'thur']
  });
  return {id: res.body._id}
}

describe("program", () => {
  it("should list programs", async () => {
    const res = await request(app).get("/program").send();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should create program", async () => {
    const res = await request(app).post("/program").send({
      name: faker.person.fullName(),
      exercises: [
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
        {name: faker.person.fullName(), series: faker.number.int({min:2, max: 4}), repetitions: faker.number.int({min: 6, max: 12})},
      ],
      days: ['wed', 'thur']
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body._id).toBeDefined();
  });

    it('should retrieve program', async () => {
      const {id} = await makeProgram()
      const res = await request(app).get(`/program/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name');
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toBeDefined();
    })

    it('should update program', async () => {
      const {id} = await makeProgram()
      const name = faker.person.fullName()
      await request(app).put(`/program/${id}`).send({
        name, exercises: [], days: []
      });
      const res = await request(app).get(`/program/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name');
      expect(res.body._id).toBeDefined();
      expect(res.body.name).toBeDefined();
      expect(res.body.name).toEqual(name);
    })
    
    it('should delete program', async () => {
      const {id} = await makeProgram()
      await request(app).delete(`/program/${id}`).send();
      const res = await request(app).get(`/program/${id}`).send().expect(404);
      expect(res.statusCode).toBe(404);
    })
  });