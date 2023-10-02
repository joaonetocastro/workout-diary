import request from "supertest";
import {app} from "../src/app";
import { faker, fakerSK } from '@faker-js/faker';

require("dotenv").config();

async function makeProgramExecution() {
  const res = await request(app).post("/program-execution").send({
    program: {
        name: faker.person.fullName(),
    },
    exercises: [
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
      {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
    ],
    datetime: new Date().toISOString()
  });
  return {id: res.body._id}
}

describe("program execution", () => {
  it("should list program executions", async () => {
    const res = await request(app).get("/program-execution").send();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should create program", async () => {
    const res = await request(app).post("/program-execution").send({
        program: {
            name: faker.person.fullName(),
        },
        exercises: [
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
          {name: faker.person.fullName(), series: [{repetitions: faker.number.int({min: 6, max: 12}), weight: 20}]},
        ],
        datetime: new Date().toISOString()
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body._id).toBeDefined();
  });

    it('should retrieve program', async () => {
      const {id} = await makeProgramExecution()
      const res = await request(app).get(`/program-execution/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body._id).toBeDefined();
    })

    it('should update program', async () => {
      const {id} = await makeProgramExecution()
      const name = faker.person.fullName()
      await request(app).put(`/program-execution/${id}`).send({
        program: {name}, exercises: [], day: new Date().toISOString()
      });
      const res = await request(app).get(`/program-execution/${id}`).send();
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('program');
      expect(res.body._id).toBeDefined();
      expect(res.body.program.name).toBeDefined();
      expect(res.body.program.name).toEqual(name);
    })
    
    it('should delete program', async () => {
      const {id} = await makeProgramExecution()
      await request(app).delete(`/program-execution/${id}`).send();
      const res = await request(app).get(`/program-execution/${id}`).send().expect(404);
      expect(res.statusCode).toBe(404);
    })
  });